import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';

export const objectToJson: Middleware = (api: MiddlewareAPI<void>) =>
    (next: Dispatch<void>) =>
        <A extends Action>(action: A): A => {
            return next(Object.assign({}, action));
        };