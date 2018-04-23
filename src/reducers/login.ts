import { combineReducers } from 'redux';
import { Actions } from '../actions/actionType';
import { ActionTypeKeys } from '../enums/ActionTypeKeys';
import { login } from '../services/account';
import { AppState } from '../App-state';

const loginSuccess = (state: AppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.LOGIN_SUCCESS) {
        console.log(state);
        return state;
    }
    return state;
};

const loginRequest = (state: AppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.LOGIN_REQUEST) {
        login(action.userForm);
        return state;
    }
    return state;
};

const loginUser = combineReducers({
    loginSuccess,
    loginRequest
});

export default loginUser;