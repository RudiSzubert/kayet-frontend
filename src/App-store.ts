import { createStore, applyMiddleware, Store } from 'redux';
import reducers from './reducers/combinedReducers';
import { objectToJson } from './middleware/objectToJson';
import { AppState } from './App-state';

export const appStore: Store<AppState> =
    createStore(reducers, applyMiddleware(objectToJson));