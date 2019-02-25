import {Db, ObjectID, FilterQuery} from 'mongodb';

import {getDB} from '../db';
import {Problems} from '../types';

export async function getProblem() {
  let db: Db = await getDB();
  let arrProblem: Array<Problems>;
  try {
    let result = await db.collection<Problems>('ProblemCollection');

    arrProblem = await result.find().toArray();
    return {
      success: true,
      data: arrProblem,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: [],
    };
  }
}
