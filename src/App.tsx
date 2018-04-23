import * as React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import history from './history';
import KayetHeader from './components/header/KayetHeader';
import CreateAccount from './components/createAccount/CreateAccount';
import Login from './components/login/Login';
import { appStore } from './App-store';

export const App: React.StatelessComponent<{}> = () => {
    return (
        <Router history={history}>
            <Provider store={appStore}>
                <div className="App">
                    <Route path="/" component={KayetHeader} />
                    <Route path="/createAccount" component={CreateAccount} />
                    <Route path="/login" component={Login} />
                </div>
            </Provider>
        </Router>
    );
};