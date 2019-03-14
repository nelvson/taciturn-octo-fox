import {MongoClient, Db} from 'mongodb';
import {DB_URL, DB_NAME} from './constants';

let db: Promise<Db> | undefined;

async function connect() {
  const client = new MongoClient(DB_URL, {useNewUrlParser: true});

  try {
    await client.connect();
    console.log('connected!');
  } catch (e) {
    console.log(e);
  }
  return client.db(DB_NAME);
}

export const getDB = async () => {
  if (db === undefined) {
    db = connect();
  }
  return db;
};
