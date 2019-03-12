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
  let arrTag: Array<Tags>;
  let tagName: string;
  try {
    let tagDB = await db.collection<Tags>('TagCollection');
    arrTag = await tagDB
      .find()
      .skip(tagId - 1)
      .limit(1)
      .toArray();
    ({tagName} = arrTag[0]);

    let result = await db.collection<Problems>('ProblemCollection');
    arrResult = await result
      .find({
        'tags.tagName': tagName,
      })
      .toArray();
    return {
      data: {
        tag: tagName,
        problems: arrResult,
      },
    };
  } catch (e) {
    return {
      success: false,
      data: [],
      message: e,
    };
  }
}
