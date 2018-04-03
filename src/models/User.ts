export default class User {
    login: string;
    email: string;
    password: string;
    id: string = '';
    createdAt: string = '';
    static stringToUser = (user: string) => {
        return new User(JSON.parse(user));
    }

    constructor(data: object) {
        Object.assign(this, data);
    }
}