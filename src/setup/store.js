import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import * as blog from '../modules/blog/api/state'
import thunk from "redux-thunk";

const appReducer = combineReducers({
    ...blog
})

export const rootReducer = (state, action) => {
    if(action.type === 'RESET') {
        state = undefined
    }

    return appReducer(state, action)
}

let initialState
if( typeof window !== 'undefined') {
    initialState = window.__INITIAL_STATE__
    delete window.__INITIAL_STATE__
}

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk)
    )
)