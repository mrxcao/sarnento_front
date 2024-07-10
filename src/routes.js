import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//import Dashboard from './private/Dashboard/Dashboard';
//import Orders from './private/Orders/Orders';
import NotFound from './components/Pages/NotFound';
import Settings from './private/Settings/Settings';
import Comandos from './public/Comandos/Comandos';
import Comofunciona from './public/Comofunciona/Comofunciona';
import Home from './public/Home/Home';
import Login from './public/Login/Login';
import Sourcecode from './public/Sourcecode/Sourcecode';
function Routes() {

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route {...rest} render={() => {
                return localStorage.getItem("token")
                    ? children
                    : <Redirect to='/' />
            }} />
        )
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin/" exact>
                    <Home />
                </Route>
                <Route path="/admin/comandos" exact>
                    <Comandos />
                </Route>
                <Route path="/admin/comofunciona" exact>
                    <Comofunciona />
                </Route>
                <Route path="/admin/sourcecode" exact>
                    <Sourcecode />
                </Route>

                <Route path="/admin/login" exact>
                    <Login />
                </Route>            
                <PrivateRoute path="/admin/settings">
                    <Settings />
                </PrivateRoute>
                
                {/* <PrivateRoute path="/orders/:symbol?">
                    <Orders />
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                */}

                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;