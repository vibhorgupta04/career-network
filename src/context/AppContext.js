'use client';
import { useContext, createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState(null);
  useEffect(() => {
    const jobsFromLS = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    setSavedJobs(jobsFromLS);
  }, []);
  return (
    <AppContext.Provider value={{ savedJobs, setSavedJobs }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(AppContext);
};
