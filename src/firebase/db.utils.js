import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import uniqid from 'uniqid';

const getProjects = async (userId) => {
  const projectsRef = collection(db, 'projects');
  const q = query(projectsRef, where('ownerId', '==', userId));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return [];
  }

  const tempData = [];
  snapshot.forEach((item) => tempData.push(item.data()));

  return tempData;
};

const addProject = async (projectName, userId) => {
  try {
    const projectsRef = collection(db, 'projects');

    await addDoc(projectsRef, {
      name: projectName,
      todos: [],
      id: uniqid(),
      ownerId: userId,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getProjects, addProject };
