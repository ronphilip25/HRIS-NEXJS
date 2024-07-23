'use client'

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Siderbar';
import { useState } from 'react';




const MainLayout = ({ pageTitle, description, keywords, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };



  return (
    <div>
      <header>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* Add more meta tags as needed */}
      </header>
      <div className="flex bg-blue-50 bg-opacity-100">
        <Sidebar isOpen={isOpen} />
        <div className="flex-1 flex flex-col">
          <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <main className={` ${isOpen ? 'md:ml-12 ' : 'lg:mr-[95px] md:mr-[95px] md:ml-5'} mx-auto mt-3 container transition-all duration-700`}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
