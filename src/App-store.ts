import { createStore, applyMiddleware, Store } from 'redux';
import createAccount from './reducers/createAccount';
import { objectToJson } from './middleware/objectToJson';
import { AppState } from './App-state';

export const appStore: Store<AppState> =
    createStore(createAccount, applyMiddleware(objectToJson));