import {Request, Response} from 'express';
import ErrorResponse from '../helpers/ErrorResponse';

export const authorizedWithRole = (role: string) => {
    return (req: Request, res: Response, next: Function) => {
        if (req.user && req.user.roles.indexOf(role) > -1) {
            next();
        } else {
            res.status(403);
            res.json(new ErrorResponse('Unauthorized access.'));
        }
    };
};
