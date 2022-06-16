import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBAapIB8_3Rhpisc-oA5BuVN24qc5Gd1w',
  authDomain: 'todos-list-react-ts.firebaseapp.com',
  projectId: 'todos-list-react-ts',
  storageBucket: 'todos-list-react-ts.appspot.com',
  messagingSenderId: '1076421844184',
  appId: '1:1076421844184:web:d005faf9fe9da317da8bad',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
