import config from '../config/config';
import UserForm from '../models/UserForm';
import history from '../history';
/*import { appStore } from '../App-store';
import User from '../models/User';
import { LoginSuccess } from '../actions/login';*/

export const create: (user: UserForm) => void = function (user: UserForm): void {
    fetch(config.mantle.createAccount, {
        method: 'POST',
        body: user.stringify(),
        headers: {
            'content-type': 'application/json'
        }
    }).then(() => {
        history.push('/login');
    }).catch((error) => {
            console.log(error);
        }
    );
};

export const login: (user: UserForm) => void = function (user: UserForm): void {
    fetch(config.mantle.login, {
        method: 'POST',
        body: user.stringify(),
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        console.log(response);
        // appStore.dispatch(new LoginSuccess(new User(response.json())));
    }).catch((error) => {
            console.log(error);
        }
    );
};