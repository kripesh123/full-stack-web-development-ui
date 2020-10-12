import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import * as blog from '../modules/blog/api/state'
import * as topic from '../modules/topic/api/state'
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import thunk from "redux-thunk";

const appReducer = combineReducers({
    common,
    user,
    ...blog,
    ...topic
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