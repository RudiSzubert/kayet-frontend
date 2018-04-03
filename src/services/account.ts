import config from '../config/config';
import { appStore } from '../App-store';
import User from '../models/User';

import {
    CreateAccountFailure,
    CreateAccountSuccess
} from '../actions/createAccount';

export const createAccount: (user: User) => void = function(user: User): void {
    fetch(config.mantle.createAccount, {
        method: 'POST',
        body: JSON.stringify(user)
    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        appStore.dispatch(new CreateAccountSuccess(response.json()));
    }).catch((error) => {
        appStore.dispatch(new CreateAccountFailure(error));
    }
    );
};