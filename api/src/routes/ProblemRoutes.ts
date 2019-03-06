import {Router} from 'express';

import {
  getProblemsController,
  getProblemController,
  getRootController,
} from '../controllers/problemController';

let problemRouter = Router();

//get All Problems
problemRouter.get('/all', getProblemsController);

//get problem on id
problemRouter.get('/id/:problemId', getProblemController);

//redirect if bad api path
//TODO create global helper function to handle bad url path
problemRouter.all('*', getRootController);

export default problemRouter;
