import {Router} from 'express';

import {getProblemsController, getTagsController} from '../controllers';

let problemRouter = Router();

//index
problemRouter.get('/', getTagsController);

//get All Problems
problemRouter.get('/all', getProblemsController);

export default problemRouter;
