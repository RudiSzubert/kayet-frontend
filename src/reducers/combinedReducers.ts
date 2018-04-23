import { combineReducers } from 'redux';
import createAccountRequest from './createAccount';
import loginUser from './login';

const reducers = combineReducers({
    createAccountRequest,
    loginUser
});

export default reducers;