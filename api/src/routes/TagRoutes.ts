import {Router} from 'express';

import {getTagsController, getTagController} from '../controllers';

let tagRouter = Router();

tagRouter.get('/', getTagsController);

tagRouter.get('/id/:tagId', getTagController);

export default tagRouter;
