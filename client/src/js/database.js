import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>
{
  const db = await openDB(DB_NAME, 1);
  const keyOfUpdatedIndex = await db.put(OBJ_STORE_NAME, {id: 1, value: content});
  console.log(`Saved to database index ${keyOfUpdatedIndex}:\n"""\n${await db.get(OBJ_STORE_NAME, keyOfUpdatedIndex)}\n"""`);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>
{
  const db = await openDB(DB_NAME, 1);
  const content = await db.get(OBJ_STORE_NAME, 1);
  console.log(content !== undefined ? `Retrieved from database:\n"""\n${content}\n"""` : "Data not found in the database");
  return content;
};

initdb();
