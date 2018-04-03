import User from '../models/User';
import { ActionTypeKeys } from '../enums/ActionTypeKeys';

export class CreateAccountRequest {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_REQUEST;
    constructor(public user: User) {}
}

export class CreateAccountFailure {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_FAILURE;
    constructor(public error: string) {}
}

export class CreateAccountSuccess {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_SUCCESS;
    constructor(public data: object) {}
}

export type CreateAccount = CreateAccountRequest | CreateAccountFailure | CreateAccountSuccess;