import {Request, Response, NextFunction} from 'express';

import {getTag} from '../models/tagModel';

async function getTagsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let result = await getTag();
    res.status(200).json({
      success: true,
      data: result.data,
      message: '',
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: [],
      message: e,
    });
    return next(e);
  }
}

export {getTagsController};
