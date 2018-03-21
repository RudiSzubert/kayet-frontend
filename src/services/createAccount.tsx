import config from './config';

function createAccount () {
    return fetch(config.mantle.createAccount, {
        method: 'POST',
        body: JSON.stringify({
            login: 'newLogin',
            password: 'password',
            email: 'twojstary'
        })
    });
}

export default createAccount;