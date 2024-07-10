'use client';

import { useState } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function DashBoardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-blue-50 bg-opacity-100">
          <Sidebar isOpen={isOpen} />
          <div className="flex-1 flex flex-col">
            <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <main className={` ${ isOpen ? 'md:ml-12 ' : 'lg:mr-[95px] md:mr-[95px] md:ml-5' } mx-auto mt-3 container transition-all duration-700`}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
