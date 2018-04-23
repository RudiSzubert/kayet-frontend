import { ActionTypeKeys } from '../enums/ActionTypeKeys';
import UserForm from '../models/UserForm';
import User from '../models/User';

export class LoginRequest {
    readonly type = ActionTypeKeys.LOGIN_REQUEST;
    constructor(public userForm: UserForm) {}
}

export class LoginSuccess {
    readonly type = ActionTypeKeys.LOGIN_SUCCESS;
    constructor(public user: User) {}
}

export type ActionLogin = LoginRequest | LoginSuccess;