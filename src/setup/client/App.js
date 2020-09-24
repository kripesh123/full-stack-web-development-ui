import React from 'react'
import { Switch, Route } from "react-router-dom";
import { routes } from "../routes";

const App = () => (
    <Switch>
        {Object.values(routes).map((route, index) => (
            <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
        ))}
    </Switch>
)

export default App