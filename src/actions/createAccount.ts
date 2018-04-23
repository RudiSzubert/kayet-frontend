import { ActionTypeKeys } from '../enums/ActionTypeKeys';
import UserForm from '../models/UserForm';

export class CreateAccountRequest {
    readonly type = ActionTypeKeys.CREATE_ACCOUNT_REQUEST;
    constructor(public userForm: UserForm) {}
}