import {Request, Response, NextFunction} from 'express';

import {BAD_API_PATH} from '../constants';
import {getProblems, getProblem} from '../models/problemModel';

function getRootController(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({...BAD_API_PATH});
}

async function getProblemsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let result = await getProblems();
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

async function getProblemController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let problemId: number = Number(req.params.problemId);
  try {
    let result = await getProblem(problemId);
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

export {getProblemsController, getProblemController, getRootController};
