import User from './models/User';
import UserForm from './models/UserForm';

export interface AppState {
    user?: User;
    userForm?: UserForm;
}