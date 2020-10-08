import React from 'react'
import { Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Layout from '../../modules/common/Layout';
import NotFound from '../../modules/common/Notfound';

const App = () => (
    <Layout>
        <Switch>
            {Object.values(routes).map((route, index) => (
                <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
            ))}

            <Route component={NotFound}></Route>
        </Switch>
    </Layout>
)

export default App