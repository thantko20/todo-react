import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

const saveUser = async (userInfo) => {
  try {
    const usersRef = collection(db, 'users');

    const q = query(usersRef, where('uid', '==', userInfo.uid));

    const usersSnapshot = await getDocs(q);

    if (usersSnapshot.empty) {
      await addDoc(usersRef, userInfo);

      return;
    }
  } catch (err) {
    console.log(err);
  }
};

export { saveUser };
