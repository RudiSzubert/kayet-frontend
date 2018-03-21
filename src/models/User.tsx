export class User {
    login: string;
    email: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    constructor(data: object) {
        Object.assign(this, data);
    }
}