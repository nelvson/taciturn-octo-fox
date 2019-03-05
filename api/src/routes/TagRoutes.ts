import {Router} from 'express';

import {getTagsController} from '../controllers';

let tagRouter = Router();

tagRouter.get('/', getTagsController);

//
//tagRouter.get('/tags/:tagId', getTagController);

export default tagRouter;
