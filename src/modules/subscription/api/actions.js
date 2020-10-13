import Axios from "axios"
import { routeApi } from "../../../setup/routes"
import { mutation, query } from "simple-graphql-query-builder"

export const SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST = 'SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE = 'SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE = 'SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE'

// Get list of subscriptions by User
export function getListByUser(isLoading = true) {
    return dispatch => {
        dispatch({
            type: SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
            error: null,
            isLoading
        })

        return Axios.post(routeApi, query({
            operation: 'subscriptionsByUser',
            fields: ['id', 'user { email, name}', 'topic { id, name, description, type, featured}', 'createdAt']
        })).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
                    error: null,
                    isLoading: false,
                    list: response.data.data.subscriptionsByUser
                })
            } else {
                console.error(response)
            }
        }).catch(error => {
            dispatch({
                type: SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
                error: 'Some error occures. please try later',
                isLoading: false
            })
        })
    }
}

// create subscription
export function create(variables) {
    return dispatch => {
        return Axios.post(routeApi, mutation({
            operation: 'subscriptionCreate',
            variables,
            fields: ['id']
        }))
    }
}

// Remove subscription
export function remove(variables) {
    return dispatch => {
        return Axios.post(routeApi, mutation({
            operation: 'subscriptionRemove',
            variables,
            fields: ['id']
        }))
    }
}