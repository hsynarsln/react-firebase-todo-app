import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;

//! NEW VERSION
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCSHkWH1mQF9dRqnEtem1Mv-LKTgdAakCE',
//   authDomain: 'todo-app-6a400.firebaseapp.com',
//   projectId: 'todo-app-6a400',
//   storageBucket: 'todo-app-6a400.appspot.com',
//   messagingSenderId: '635388393436',
//   appId: '1:635388393436:web:819f2b9331c2dabb938119'
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export default db;
