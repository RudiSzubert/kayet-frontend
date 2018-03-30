import User from '../models/User';

export const createAccountRequestFactory = (user: User) => {
    return { type: 'CREATE_ACCOUNT_REQUEST', user };
};

export const createAccountFailureFactory = (error: string) => {
    return { type: 'CREATE_ACCOUNT_FAILURE', error };
};

export const createAccountSuccessFactory = (data: object) => {
    const user = new User(data.user);
    return { type: 'CREATE_ACCOUNT_SUCCESS', user };
};