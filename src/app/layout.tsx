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
