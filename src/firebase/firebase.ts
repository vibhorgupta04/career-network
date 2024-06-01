'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDwlXDgyQ3w9PzTP5Q-Ib9pB9KiggfaDs4',
  authDomain: 'e-bay-f79ff.firebaseapp.com',
  projectId: 'e-bay-f79ff',
  storageBucket: 'e-bay-f79ff.appspot.com',
  messagingSenderId: '1059789386236',
  appId: '1:1059789386236:web:ed7d9ca8f0401ade4b8279',
  measurementId: 'G-FQM3Z7HV3K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);