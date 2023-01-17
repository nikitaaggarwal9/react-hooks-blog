// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGUh0fLlfAykk7t8O-Fpp5xtCoSvOdMGk',
  authDomain: 'react-hooks-blog-eade2.firebaseapp.com',
  projectId: 'react-hooks-blog-eade2',
  storageBucket: 'react-hooks-blog-eade2.appspot.com',
  messagingSenderId: '740935954469',
  appId: '1:740935954469:web:48032c10dfbd6258264fcc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const postsRef = collection(db, "posts");
