'use client';
import { useContext, createContext, useState, useEffect } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
export const AppContextProvider = ({ children }) => {
  // Define state for saved jobs and initialize it with null
  const [savedJobs, setSavedJobs] = useState(null);
  // Load saved jobs from localStorage on component mount
  useEffect(() => {
    const jobsFromLS = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    setSavedJobs(jobsFromLS);
  }, []);
  // Provide the savedJobs state and setSavedJobs function to the context
  return (
    <AppContext.Provider value={{ savedJobs, setSavedJobs }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume the AppContext
export const UseAppContext = () => {
  return useContext(AppContext);
};
