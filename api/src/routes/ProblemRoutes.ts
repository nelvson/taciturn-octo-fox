import {Router} from 'express';

import {
  getProblemsController,
  getProblemController,
  getRootController,
} from '../controllers/problemController';

let problemRouter = Router();

//index
problemRouter.get('/', getRootController);

//get All Problems
problemRouter.get('/all', getProblemsController);

//get problem on id
problemRouter.get('/id/:problemId', getProblemController);

export default problemRouter;
