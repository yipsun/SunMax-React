import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxqfw0tZOlQ6ITm_w-ZfRN5DybnQa6nYI",
  authDomain: "tweetclone-1b35e.firebaseapp.com",
  databaseURL: "https://tweetclone-1b35e.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
