import config from '../config/config';
import { appStore } from '../App-store';
import UserForm from '../models/UserForm';

import {
    CreateAccountFailure,
    CreateAccountSuccess
} from '../actions/createAccount';

export const create: (user: UserForm) => void = function(user: UserForm): void {
    fetch(config.mantle.createAccount, {
        method: 'POST',
        body: user.stringify()
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