import React from 'react'
import { renderToString } from 'react-dom/server'
import { routes } from '../routes'
import { matchPath, StaticRouter } from 'react-router-dom'

import App from '../client/App'
import view from '../server/view'
import { flushToHTML } from 'styled-jsx/server'
import { APP_URL, NODE_ENV } from '../config/env'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

export default function (app) {
    console.log('SETUP- LOAD routes......')

    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )

    app.get('*', (request, response) => {
        let status = 200

        const matches = Object.values(routes).reduce((matches, route) => {
            const match = matchPath(request.url, typeof route.path === 'function' ? route.path() : route.path, route)

            if (match && match.isExact) {
                matches.push({
                    route,
                    match,
                    promise: route.component.fetchData ? route.component.fetchData({
                        store,
                        params: match.params
                    }) : Promise.resolve(null)
                })
            }
            return matches
        }, [])

        if (matches.length === 0) {
            status = 404
        }

        const promises = matches.map((match) => {
            return match.promise
        })

        Promise.all(promises)
            .then((...data) => {
                const initialState = store.getState()
                const context = {}

                const appHTML = renderToString(
                    <Provider store={store} key="provider">
                        <StaticRouter context={context} location={request.url}>
                            <App />
                        </StaticRouter>
                    </Provider>
                )

                if (context.url) {
                    response.redirect(context.url)
                } else {
                    const styles = flushToHTML()

                    const html = view(APP_URL, NODE_ENV, appHTML, styles, initialState)

                    store.dispatch({
                        type: 'RESET'
                    })
                    
                    return response.status(status).send(html)
                }

            }).catch(error => {
                console.error(error)
            })
    })
}