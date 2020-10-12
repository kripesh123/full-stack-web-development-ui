// Imports
import Axios from "axios"

// App Imports
import { routeApi } from "../../../setup/routes"
import { query } from "simple-graphql-query-builder"


// ACTION TYPES
export const TOPICS_GET_LIST_REQUEST = 'TOPICS_GET_LIST_REQUEST'
export const TOPICS_GET_LIST_RESPONSE = 'TOPICS_GET_LIST_RESPONSE'
export const TOPICS_GET_LIST_FAILURE = 'TOPICS_GET_LIST_FAILURE'


// get list of topic
export function getList(orderBy = 'DESC', isLoading = true) {
    return dispatch => {
        dispatch({
            type: TOPICS_GET_LIST_REQUEST,
            error: null,
            isLoading
        })

        return Axios.post(routeApi, query({
            operation: 'topics',
            variables: { orderBy },
            fields: [ 'id', 'name', 'description', 'type', 'featured', 'createdAt', 'updatedAt']
        })).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: TOPICS_GET_LIST_RESPONSE,
                    error: null,
                    isLoading: false,
                    list: response.data.data.topics
                })
            } else {
                dispatch({
                    type: TOPICS_GET_LIST_FAILURE,
                    error: response.data.errors[0].message,
                    isLoading: false
                })
            }
        }).catch(error => {
            dispatch({
                type: TOPICS_GET_LIST_FAILURE,
                error: 'Some Error.',
                isLoading: false
            })
        })
    }
}