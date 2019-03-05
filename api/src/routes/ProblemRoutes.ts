import {Router} from 'express';

import {
  getProblemsController,
  getProblemController,
} from '../controllers/problemController';

let problemRouter = Router();

//index
//problemRouter.get('/', getTagsController);

//get All Problems
problemRouter.get('/all', getProblemsController);

problemRouter.get('/id/:problemId', getProblemController);

export default problemRouter;
