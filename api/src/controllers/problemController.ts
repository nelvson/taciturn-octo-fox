import {Request, Response, NextFunction} from 'express';

import {getProblem} from '../models/problemModel';

async function getProblemsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let result = await getProblem();
    console.log(result);
    res.status(200).json({
      success: true,
      data: result.data,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: 'failed',
    });
    return next(e);
  }
}

export {getProblemsController};
