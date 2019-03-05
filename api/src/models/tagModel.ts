import {Db, ObjectID, FilterQuery} from 'mongodb';

import {getDB} from '../db';
import {Tags} from '../types';

export async function getTag() {
  let db: Db = await getDB();
  let arrTag: Array<Tags>;
  try {
    let result = await db.collection<Tags>('TagCollection');

    arrTag = await result.find({}, {projection: {_id: 0}}).toArray();
    return {
      success: true,
      data: arrTag,
      message: '',
    };
  } catch (e) {
    return {
      success: false,
      data: [],
      message: e,
    };
  }
}
