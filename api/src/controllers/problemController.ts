import {Request, Response, NextFunction} from 'express';

import {getProblem} from '../models/problemModel';

async function getProblemsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let result = await getProblem();
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

export {getProblemsController};
