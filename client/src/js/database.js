// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
  openDB('contactDB', 1, {
    // Sets the database schema if it isn't already defined.
    upgrade(db) {
      if (db.objectStoreNames.contains('contacts')) {
        console.log('contacts database already exists');
        return;
      }

      // Create an object store for our data inside of the 'demo-db'.
      // We create a key named 'id' which will automatically be incremented for us.
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      console.log('contacts database created');
    },
  });
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
  console.log('Post to the Database');

  const contactsDB = await openDB('contactDB', 1);
  const tx = contactsDB.transaction('contacts', 'readwrite');
  const store = tx.objectStore('contacts');
  const request = store.add({ contact: name, home, cell, email});
  const result = await request;
  console.log('🚀 - data saved to the contacts database', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  console.log('GET all from the database');
  const contactsDB = await openDB('contactDB', 1);
  const tx = contactsDB.transaction('contacts', 'readonly');
  const store = tx.objectStore('contacts');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  console.log('DELETE from the contacts database', id);
  const contactsDB = await openDB('contacts', 1);
  const tx = contactsDB.transaction('contacts', 'readwrite');
  const store = tx.objectStore('contacts');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
