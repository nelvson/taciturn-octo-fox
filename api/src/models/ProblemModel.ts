import {Db, ObjectID, FilterQuery} from 'mongodb';

import {getDB} from '../db';
import {Problems} from '../types';

export async function getProblem() {
  let db: Db = await getDB();
  let arrProblem: Array<Problems>;
  try {
    let result = await db.collection<Problems>('ProblemCollection');

    arrProblem = await result
      .find(
        {
          // excluding any problems
          'tags.tagName': {$nin: ['__development']}, // with '__development'
        },
        {
          // tag
          //         projection: {_id: 1, title: 1},
        },
      )
      .toArray();
    return {
      success: true,
      data: arrProblem,
      message: '',
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
