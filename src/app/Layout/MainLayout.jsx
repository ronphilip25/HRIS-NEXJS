'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Siderbar';


const MainLayout = ({ pageTitle, description, keywords, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const changeNavbarText = (newTitle) => {
    setNavbarTitle(newTitle); // Update the title
  };

  return (
    <>
      <div>
        <header>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </header>
        <div className="flex bg-blue-50 bg-opacity-100 z-50">
          <Sidebar isOpen={isOpen} changeNavbarText={changeNavbarText} />
          <div className="flex-1 flex flex-col">
            <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <main className={` ${isOpen ? 'lg:mx-8 md:mx-7' : 'lg:mr-[14px] md:mr-[14px] '} overflow-hidden mt-3 lg:max-[1024px]:mt-2 container w-auto transition-all duration-500`}>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
