import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { ProjectType, UserInfo } from '../types';

const usersCol = collection(db, 'users');
const projectsCol = collection(db, 'projects');

const useDb = () => {
  const saveUser = async (userInfo: UserInfo) => {
    if (!userInfo) {
      return;
    }
    try {
      const q = query(usersCol, where('uid', '==', userInfo.uid));

      const usersSnapshot = await getDocs(q);

      if (usersSnapshot.empty) {
        await setDoc(doc(db, 'users', userInfo.uid), userInfo);

        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProjects = async (uid: string | undefined) => {
    if (!uid) return;

    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, where('ownedByuid', '==', uid));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return [];
    }

    const tempData: ProjectType[] = [];
    snapshot.forEach((item) => tempData.push(item.data() as ProjectType));
    console.log(tempData);

    return tempData;
  };

  return { saveUser, getProjects };
};

export default useDb;
