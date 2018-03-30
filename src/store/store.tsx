import { createStore } from 'redux';
import createAccount from '../reducers/createAccount';

const store = createStore(createAccount);

export default store;