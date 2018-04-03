import { ActionTypeKeys } from '../enums/ActionTypeKeys';

export class CreateAccountFailure {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_FAILURE;
    constructor(public error: string) {}
}

export class CreateAccountSuccess {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_SUCCESS;
    constructor(public data: object) {}
}

export type CreateAccount = CreateAccountFailure | CreateAccountSuccess;