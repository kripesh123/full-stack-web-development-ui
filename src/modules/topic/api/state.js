// App Imports
import {
    TOPICS_GET_LIST_FAILURE,
    TOPICS_GET_LIST_REQUEST,
    TOPICS_GET_LIST_RESPONSE
} from './actions'

//initial state
const topicsInitialState = {
    isLoading: false,
    error: null,
    list: []
}

// state

export const topics = (state = topicsInitialState, action) => {
    switch (action.type) {
        case TOPICS_GET_LIST_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error
            }
        case TOPICS_GET_LIST_RESPONSE:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
                list: action.list
            }
        case TOPICS_GET_LIST_FAILURE:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error
            }
        default:
            return state
    }
}