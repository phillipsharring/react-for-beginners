import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// this is a default export
export default base;
