import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { Provider } from 'react-redux'
import { store } from '../store'

const Client = () => (
    <Provider store={store} key="provider">
        <Router>
            <App />
        </Router>
    </Provider>

)

window.onload = () => {
    hydrate(
        <Client />,
        document.getElementById('app')
    )
}