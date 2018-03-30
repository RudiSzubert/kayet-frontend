import User from '../models/User';

export interface CreateAccountAction {
    type: string;
    newUser: User;
}

export interface ErrorAction {
    type: string;
    error: string;
}