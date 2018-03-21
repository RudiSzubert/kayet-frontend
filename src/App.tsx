import * as React from 'react';
import './App.css';
import KayetHeader from './components/header/KayetHeader';
import CreateAccount from './components/createAccount/CreateAccount';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <KayetHeader />
                </header>
                <CreateAccount />
            </div>
        );
    }
}

export default App;
