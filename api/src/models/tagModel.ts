import {Db, ObjectID, FilterQuery} from 'mongodb';

import {getDB} from '../db';
import {Tags, Problems} from '../types';

export async function getTags() {
  let db: Db = await getDB();
  let arrTag: Array<Tags>;
  try {
    let result = await db.collection<Tags>('TagCollection');

    arrTag = await result.find({}, {projection: {_id: 0}}).toArray();
    return {
      data: arrTag,
    };
  } catch (e) {
    return {
      success: false,
      data: [],
      message: e,
    };
  }
}

export async function getTag(tagId: number) {
  let db: Db = await getDB();
  let arrResult: Array<Problems>;
  try {
    let result = await db.collection<Problems>('ProblemCollection');
    arrResult = await result
      .find()
      .skip(tagId)
      .limit(1)
      .toArray();
    return {
      data: arrResult,
    };
  } catch (e) {
    return {
      success: false,
      data: [],
      message: e,
    };
  }
}
