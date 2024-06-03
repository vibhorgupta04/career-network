'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '@/firebase/firebase';

// Create a context for authentication
const AuthContext = createContext();

// Authentication context provider component
export const AuthContextProvider = ({ children }) => {
  // State to store the current user
  const [user, setUser] = useState(null);

  // Function to handle Google sign-in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // Function to handle logout
  const logOut = () => {
    signOut(auth);
  };

  // Effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [user]);

  // Provide user data and authentication functions to the context
  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the AuthContext
export const UserAuth = () => {
  return useContext(AuthContext);
};
