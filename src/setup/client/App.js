import React from 'react'
import { Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Layout from '../../modules/common/Layout';
import NotFound from '../../modules/common/Notfound';
import RoutePrivate from '../../modules/auth/RoutePrivate';

const App = () => (
    <Layout>
        <Switch>
            {Object.values(routes).map((route, index) => (
                route.auth 
                    ? <RoutePrivate  {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
                    : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
            ))}
            <Route component={NotFound}></Route>
        </Switch>
    </Layout>
)

export default App