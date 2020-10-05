import Axios from "axios"
import { routeApi } from '../../../setup/routes'
import { query } from "simple-graphql-query-builder"

export const BLOGS_GET_LIST_REQUEST = 'BLOGS_GET_LIST_REQUEST'
export const BLOGS_GET_LIST_RESPONSE = 'BLOGS_GET_LIST_RESPONSE'
export const BLOGS_GET_LIST_FAILURE = 'BLOGS_GET_LIST_FAILURE'

export const BLOGS_GET_REQUEST = 'BLOGS_GET_REQUEST'
export const BLOGS_GET_RESPONSE = 'BLOGS_GET_RESPONSE'
export const BLOGS_GET_FAILURE = 'BLOGS_GET_FAILURE'

export function getList(isLoading = true, forceRefresh = false) {
    return dispatch => {
        dispatch({
            type: BLOGS_GET_LIST_REQUEST,
            isLoading
        })

        return Axios.post(routeApi, query({
            operation: 'articles',
            fields: ['id', 'title', 'slug', 'description', 'body', 'image', 'type', 'featured', 'isActive', 'createdAt', 'updatedAt']
        })).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: BLOGS_GET_LIST_RESPONSE,
                    isLoading: false,
                    list: response.data.data.articles
                })
            } 
        }).catch(error => {
            dispatch({
                type: BLOGS_GET_LIST_FAILURE,
                error: 'Some error occur please come later! ',
                isLoading: false
            })
        })
    }
}

export function get(slug, isLoading = true) {
    return dispatch => {
        dispatch({
            type: BLOGS_GET_REQUEST,
            isLoading
        })

        return Axios.post(routeApi, query({
            operation: 'article',
            variables: {slug},
            fields: ['id', 'title', 'slug', 'description', 'body', 'image', 'type', 'featured', 'isActive', 'createdAt', 'updatedAt']
        })).then(response => {
            if(response.status === 200){
                if(response.data.errors && response.data.errors.length > 0){
                    dispatch({
                        type: BLOGS_GET_FAILURE,
                        isLoading: false,
                        error: response.data.errors[0].message
                    })
                } else {
                    dispatch({
                        type: BLOGS_GET_RESPONSE,
                        isLoading: false,
                        error: null,
                        item: response.data.data.article
                    })
                }
            } else {
                dispatch({
                    type: BLOGS_GET_FAILURE,
                    isLoading: false,
                    error: 'SOME ERROR. PLEASE TRY AGAIN.'
                })
            }
        })
    }
}