import { Actions } from '../actions/actionType';
import { ActionTypeKeys } from '../enums/ActionTypeKeys';
import { create } from '../services/account';
import { AppState } from '../App-state';

const createAccountRequest = (state: AppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_ACCOUNT_REQUEST) {
        create(action.userForm);
        return state;
    }
    return state;
};

export default createAccountRequest;