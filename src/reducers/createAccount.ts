import { combineReducers } from 'redux';
import { Actions } from '../actions/actionType';
import { ActionTypeKeys } from '../enums/ActionTypeKeys';
import { create } from '../services/account';
import { AppState } from '../App-state';

const createAccountSuccess = (state: AppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_ACCOUNT_SUCCESS) {
        console.log(state);
        return state;
    }
    return state;
};

const createAccountFailure = (state: AppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_ACCOUNT_FAILURE) {
        console.log(state);
        return state;
    }
    return state;
};

const createAccountRequest = (state: AppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_ACCOUNT_REQUEST) {
        create(action.userForm);
        return state;
    }
    return state;
};

const createAccount = combineReducers({
    createAccountSuccess,
    createAccountFailure,
    createAccountRequest
});

export default createAccount;