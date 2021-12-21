import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCSHkWH1mQF9dRqnEtem1Mv-LKTgdAakCE',
  authDomain: 'todo-app-6a400.firebaseapp.com',
  projectId: 'todo-app-6a400',
  storageBucket: 'todo-app-6a400.appspot.com',
  messagingSenderId: '635388393436',
  appId: '1:635388393436:web:819f2b9331c2dabb938119'
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
