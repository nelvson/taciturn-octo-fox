import {Router} from 'express';

import {getProblemsController} from '../controllers';

let problemRouter = Router();

//get All Problems
problemRouter.get('/', getProblemsController);

export default problemRouter;
