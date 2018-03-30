import { combineReducers } from 'redux';
import { CreateAccountAction, ErrorAction } from '../interfaces/Action.interface';
import account from '../services/account';

const createAccountRequest = (state: object = {}, action: CreateAccountAction) => {
    account.create(action.newUser);
    return state;
};

const createAccountSuccess = (state: object = {}, action: CreateAccountAction) => {
    console.log(state);
    return state;
};

const createAccountFailure = (state: object = {}, action: ErrorAction) => {
    console.log(state);
    return state;
};

const createAccount = combineReducers({
    createAccountRequest,
    createAccountSuccess,
    createAccountFailure
});

export default createAccount;