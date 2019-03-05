import {Router} from 'express';

import {problemRouter} from '.';
import tagRouter from './TagRoutes';

let apiRouter = Router();

//index TODO: create response for /api/
//apiRouter.get('/', getTagsController);

//go to /problems
apiRouter.use('/problems', problemRouter);

//go to /tag
apiRouter.use('/tags', tagRouter);

export default apiRouter;
