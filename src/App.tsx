import * as React from 'react';
import './App.css';
import KayetHeader from './components/header/KayetHeader';
import loginUser from './services/login';

const logo = require('./logo.svg');

class App extends React.Component {
    render() {

        let beniz: object;

        loginUser().then(results => {
            beniz = results;
            console.log(beniz);
        }).catch((error: object) => {
            console.log(error);
        });

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <KayetHeader/>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
