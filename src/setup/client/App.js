import React from 'react'
import { Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Layout from '../../modules/common/Layout';

const App = () => (
    <Layout>
        <Switch>
            {Object.values(routes).map((route, index) => (
                <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
            ))}
        </Switch>
    </Layout>
)

export default App