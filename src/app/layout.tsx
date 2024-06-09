import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallButton from '@/components/CallButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Karna Shahi, Korean Language Instructor',
  description: 'Korean Language Instructor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CallButton />
        </div>
      </body>
    </html>
  );
}
