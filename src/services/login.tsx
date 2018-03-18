import config from './config';

function loginUser () {
    return fetch(config.mantle.login, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        }
    });
}

export default loginUser;