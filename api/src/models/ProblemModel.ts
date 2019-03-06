import {Db, ObjectID, FilterQuery} from 'mongodb';

import {getDB} from '../db';
import {Problems} from '../types';

let arrProblem: Array<Problems>;

export async function getProblems() {
  let db: Db = await getDB();
  try {
    let result = await db.collection<Problems>('ProblemCollection');

    arrProblem = await result
      .find(
        {
          /*******************************************  excluding any problems */
          'tags.tagName': {$nin: ['__development']}, // with '__development'
        } /******************************************** tag */,
        {
          //         projection: {_id: 1, title: 1},
        },
      )
      .toArray();
    return {
      data: arrProblem,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: [],
      message: e,
    };
  }
}

export async function getProblem(problemId: number) {
  let db: Db = await getDB();
  try {
    let result = await db.collection<Problems>('ProblemCollection');
    arrProblem = await result
      .find()
      .skip(problemId)
      .limit(1)
      .toArray();
    return {
      data: arrProblem,
    };
  } catch (e) {
    return {
      success: false,
      data: [],
      message: e,
    };
  }
}
