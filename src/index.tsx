import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
