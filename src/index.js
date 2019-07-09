import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './prelogin/login/Login';
import Register from './prelogin/registration/register';
import ForgotPassword from './prelogin/forgot-password/ForgotPassword';
import PageNotFound from './prelogin/page-not-found/PageNotFound';
const routing = (
    <Router>
        <div>
            <Switch>
                {/* <Route></Route> */}
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
                <Route path="/dashboard" component={App}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
