'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define type for user profile
interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  accessToken: string | any;
}

const SignUp = () => {
  // Initialize router
  const router = useRouter();

  // Initial form values
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    mobileNumber: Yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Mobile number is not valid'),
  });

  // Handle form submission
  const handleSubmit = async (values: typeof initialValues) => {
    try {
      // Create user with email and password
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user: any = userCredential.user;

      // Create user profile object
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email,
        firstName: values.firstName,
        lastName: values.lastName,
        mobileNumber: values.mobileNumber,
        accessToken: user.accessToken,
      };

      // Store token and user profile in local storage
      localStorage.setItem('token', user.accessToken ?? '');
      localStorage.setItem('user', JSON.stringify(userProfile));

      // Show success toast notification
      toast.success('Signup successful! Redirecting to homepage...', {
        onClose: () => {
          // Redirect to home page after a short delay
          router.push('/');
        },
      });
    } catch (error: any) {
      // Show error toast notification
      toast.error('Error signing up: ' + error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-2">
      <div className="pt-6 pb-4">
        <h1 className="text-xl font-semibold">Create your Career profile</h1>
        <p className='text-sm text-gray-500'>Search & apply to jobs from India's No.1 Job Site</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="pl-2 text-sm font-medium">Full name*</label>
              <Field
                type="text"
                name="firstName"
                placeholder="First name"
                className={`focus:outline-none ring-1 ${
                  touched.firstName && errors.firstName ? 'ring-red-500' : 'ring-gray-100'
                } focus:ring-blue-1 text-sm px-4 py-3 rounded-xl`}
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs pl-2" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="pl-2 text-sm font-medium">Last name*</label>
              <Field
                type="text"
                name="lastName"
                placeholder="Last name"
                className={`focus:outline-none ring-1 ${
                  touched.lastName && errors.lastName ? 'ring-red-500' : 'ring-gray-100'
                } focus:ring-blue-1 text-sm px-4 py-3 rounded-xl`}
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs pl-2" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="pl-2 text-sm font-medium">Email*</label>
              <Field
                type="email"
                name="email"
                placeholder="Tell us your email"
                className={`focus:outline-none ring-1 ${
                  touched.email && errors.email ? 'ring-red-500' : 'ring-gray-100'
                } focus:ring-blue-1 text-sm px-4 py-3 rounded-xl`}
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs pl-2" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="pl-2 text-sm font-medium">Password*</label>
              <Field
                type="password"
                name="password"
                placeholder="(Minimum 6 characters)"
                className={`focus:outline-none ring-1 ${
                  touched.password && errors.password ? 'ring-red-500' : 'ring-gray-100'
                } focus:ring-blue-1 text-sm px-4 py-3 rounded-xl`}
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs pl-2" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="pl-2 text-sm font-medium">Mobile number*</label>
              <Field
                type="text"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                className={`focus:outline-none ring-1 ${
                  touched.mobileNumber && errors.mobileNumber ? 'ring-red-500' : 'ring-gray-100'
                } focus:ring-blue-1 text-sm px-4 py-3 rounded-xl`}
              />
              <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-xs pl-2" />
            </div>
            <button type="submit" className="w-fit bg-blue-1 py-2 px-6 rounded-full text-white font-semibold" disabled={isSubmitting}>
              Signup
            </button>
          </Form>
        )}
      </Formik> 
      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
