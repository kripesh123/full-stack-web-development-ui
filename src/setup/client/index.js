import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

const Client = () => (
    <Router>
        <App />
    </Router>
)

window.onload = () => {
    hydrate(
        <Client />,
        document.getElementById('app')
    )
}