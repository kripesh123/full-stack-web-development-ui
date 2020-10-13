import {
    SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
    SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
    SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST
} from './actions'

// Subscription list by user

//initial state
const subscriptionsByUserInitialState = {
    isLoading: false,
    error: null,
    list: []
}

// State
export const subscriptionsByUser = (state = subscriptionsByUserInitialState, action) => {
    switch (action.type) {
        case SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }
        case SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                list: action.list
            }
        case SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}