import { combineReducers } from 'redux';
import { Actions } from '../actions/actionType';
import { AppState } from '../App-state';
import { ActionTypeKeys } from '../enums/ActionTypeKeys';

const createAccountSuccess = (state: AppState, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_ACCOUNT_SUCCESS) {
        console.log(state);
    }
    return state;
};

const createAccountFailure = (state: AppState, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_ACCOUNT_FAILURE) {
        console.log(state);
    }
    return state;
};

const createAccount = combineReducers({
    createAccountSuccess,
    createAccountFailure
});

export default createAccount;