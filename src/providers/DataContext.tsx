import React, { createContext, useContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import useDb from '../hooks/useDb';
import { CommonProps, ProjectType, UserProjectsData } from '../types';

const DataContext = createContext<UserProjectsData>({
  projects: [],
  currentProjectId: null,
});
// Function for providing data to child components
const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }: CommonProps) => {
  const { user } = useAuth();
  const { getProjects } = useDb();
  const [projectsData, setProjectsData] = useState<UserProjectsData>({
    projects: [],
    currentProjectId: null,
  });

  // Retrieve data from firestore on mount
  useEffect(() => {
    const fetchProjects = async () => {
      const projects = (await getProjects(user?.uid)) as ProjectType[];

      setProjectsData({
        projects,
        currentProjectId: null,
      });
    };

    fetchProjects();
  }, [user]);

  return (
    <DataContext.Provider value={projectsData}>{children}</DataContext.Provider>
  );
};

export { useDataContext, DataProvider };
