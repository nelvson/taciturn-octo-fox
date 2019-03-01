import {Router} from 'express';

import {getProblemsController, getTagsController} from '../controllers';
import {problemRouter} from '../routes';
let apiRouter = Router();

//index
//problemRouter.get('/', getTagsController);

//get All Problems
apiRouter.use('/problems', problemRouter);

export default apiRouter;
