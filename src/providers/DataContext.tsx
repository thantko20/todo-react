import React, { createContext, useContext, useEffect, useState } from 'react';
import { getProjects } from '../firebase/db.utils';
import { useAuthContext } from './AuthContext';

interface Todo {
  title: string;
  description: string;
  date: string;
  priority: string;
  completed: boolean;
  id: string;
}

interface List {
  name: string;
  todos: Todo[];
  id: string;
  ownerId: string;
}

interface DataContextType {
  data: List[];
}

const DataContext = createContext<DataContextType>({ data: [] });
// Function for providing data to child components
const useDataContext = () => useContext(DataContext);

interface Props {
  children?: React.ReactNode;
}

const DataProvider = ({ children }: Props) => {
  const { user } = useAuthContext();
  const [data, setData] = useState<List[]>([]);

  // Retrieve data from firestore on mount
  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getProjects(user?.uid);

      setData(result);
    };

    fetchProjects();
  }, [user]);

  const value = {
    data,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { useDataContext, DataProvider };
