import React from 'react'
import { renderToString } from 'react-dom/server'
import { routes } from '../routes'
import { matchPath, StaticRouter } from 'react-router-dom'

import App from '../client/App'
import view from '../server/view'
import { flushToHTML } from 'styled-jsx/server'
import { APP_URL, NODE_ENV } from '../config/env'

export default function(app) {
    console.log('SETUP- LOAD routes......')

    app.get('*', (request, response) => {
        let status = 200

        const matches = Object.values(routes).reduce((matches, route) => {
            const match = matchPath(request.url,typeof route.path === 'function' ? route.path() : route.path, route)
            
            if(match && match.isExact) {
                matches.push({
                    route,
                    match,
                    promise: route.component.fetchData ? route.component.fetchData({
                        params: match.params
                    }) : Promise.resolve(null)
                })
            }
            return matches
        }, [])

        if(matches.length === 0){
            status = 404
        }

        const promises = matches.map((match) => {
            return match.promise
        })

        Promise.all(promises)
            .then((...data) => {

                const context = {}

                const appHTML = renderToString(
                    <StaticRouter context={context} location={request.url}>
                        <App />
                    </StaticRouter>
                )

                if(context.url){
                    response.redirect(context.url)
                } else {
                    const styles = flushToHTML()

                    const html = view(APP_URL, NODE_ENV, appHTML, styles)

                    return response.status(status).send(html)
                }

            }).catch(error => {
                console.error(error)
            })
    })
}