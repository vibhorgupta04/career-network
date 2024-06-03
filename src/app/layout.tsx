'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthContextProvider } from '@/context/AuthContext';
import { AppContextProvider } from '@/context/AppContext';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Career Network</title>
        <meta name="description" content="Your page description here." />
        <meta property="og:title" content="Your Page Title" />
        <meta name="description" content="Find your dream job on Career Network! Explore thousands of job listings, from entry-level positions to top executive roles, across various industries. Apply now and take the next step in your career." />
        <meta property="og:image" content="/logo.png" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <AppContextProvider>
            <Header />
            {children}
            <Footer />
          </AppContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
