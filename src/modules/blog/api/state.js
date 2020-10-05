import { BLOGS_GET_FAILURE, BLOGS_GET_REQUEST, BLOGS_GET_RESPONSE, BLOGS_GET_LIST_FAILURE, BLOGS_GET_LIST_REQUEST, BLOGS_GET_LIST_RESPONSE } from './actions'

const blogsInitialState = {
    isLoading: false,
    error: null,
    list: []
}

export const blogs = (state = blogsInitialState, action) => {
    switch (action.type) {
        case BLOGS_GET_LIST_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case BLOGS_GET_LIST_RESPONSE:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
                list: action.list
            }
        case BLOGS_GET_LIST_FAILURE:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
            }
        default:
            return state;
    }
}

const blogInitialState = {
    isLoading: false,
    error: null,
    item: {}
}

export const blog = (state = blogInitialState, action) => {
    switch (action.type) {
        case BLOGS_GET_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case BLOGS_GET_RESPONSE:
            return {
                ...state,
                isLoading: action.isLoading,
                item: action.item
            }
        case BLOGS_GET_LIST_FAILURE:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
            }
        default:
            return state;
    }
}