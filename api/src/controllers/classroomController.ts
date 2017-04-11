import {Request, Response, Router} from 'express';
import {authenticated} from '../middlewares/authenticated';
import {authorizedWithRole} from '../middlewares/authorizedWithRole';
import SuccessResponse from '../helpers/SuccessResponse';
import ErrorResponse from '../helpers/ErrorResponse';
import {classroomService} from '../services/classroomService';
const router = Router();

/**
 * Classroom controller
 */

router.get('/', authenticated, authorizedWithRole('ROLE_TEACHER'), async (req: Request, res: Response) => {
    try {
        const classrooms = await classroomService.getAllByAttendee(req.user.id);
        res.status(200);
        res.json(new SuccessResponse(classrooms));
    } catch (e) {
        res.status(400);
        res.json(new ErrorResponse(e));
    }
});

router.post('/', authenticated, authorizedWithRole('ROLE_TEACHER'), (req: Request, res: Response) => {
    res.json('');
});

router.get('/:id', authenticated, authorizedWithRole('ROLE_TEACHER'), (req: Request, res: Response) => {
    res.json('');
});

router.put('/:id', authenticated, authorizedWithRole('ROLE_TEACHER'), (req: Request, res: Response) => {
    res.json('');
});

router.delete('/:id', authenticated, authorizedWithRole('ROLE_TEACHER'), (req: Request, res: Response) => {
    res.json('');
});

export default router;
