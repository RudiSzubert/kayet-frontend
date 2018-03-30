import config from '../config/config';
import store from '../store/store';
import User from '../models/User';

import {
    createAccountFailureFactory,
    createAccountSuccessFactory
} from '../actions/createAccount';

const createAccount = (newUser: User) => {
    fetch(config.mantle.createAccount, {
        method: 'POST',
        body: JSON.stringify(newUser)
    }).then((newUserData) => {
        store.dispatch(createAccountSuccessFactory(newUserData));
    }).catch((error) => {
            store.dispatch(createAccountFailureFactory(error));
        }
    );
};

export default {
    create: createAccount
};