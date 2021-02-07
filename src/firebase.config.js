import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDgmRhT-3AD9bL2xGFzYlA-xEUla4O1TZE',
  authDomain: 'blog-21be7.firebaseapp.com',
  projectId: 'blog-21be7',
  storageBucket: 'blog-21be7.appspot.com',
  messagingSenderId: '833609753582',
  appId: '1:833609753582:web:b75b40f36fe41ffcb724ff',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
