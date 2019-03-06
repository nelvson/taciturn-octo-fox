import {Request, Response, NextFunction} from 'express';

import {getTags, getTag} from '../models/tagModel';

async function getTagsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let result = await getTags();
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

async function getTagController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let result = await getTag(13);
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

export {getTagsController, getTagController};
