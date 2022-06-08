import { auth } from './firebase';
import { saveUser } from './db.utils';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup, signOut as FbSignOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const signIn = async () => {
  await signInWithPopup(auth, provider);
  const user = auth.currentUser;
  console.log(user);

  // TODO: Save user info in database

  const { displayName, email, uid } = user;
  const now = new Date();
  const createdAt = now.toLocaleString('en-GB', { timeZone: 'UTC' });
  saveUser({ displayName, email, uid, createdAt });

  return user;
};

const signOut = async () => {
  await FbSignOut(auth);
};

export { signIn, signOut };
