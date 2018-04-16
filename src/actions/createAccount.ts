import { ActionTypeKeys } from '../enums/ActionTypeKeys';
import UserForm from '../models/UserForm';

export class CreateAccountFailure {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_FAILURE;
    constructor(public error: string) {}
}

export class CreateAccountRequest {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_REQUEST;
    constructor(public userForm: UserForm) {}
}

export class CreateAccountSuccess {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_SUCCESS;
    constructor(public data: object) {}
}

export type CreateAccount = CreateAccountFailure | CreateAccountSuccess | CreateAccountRequest;