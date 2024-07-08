'use client'

import { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between">
        <Sidebar isOpen={isOpen}  />
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="flex flex-col ml-64">
        {children}
        </div>
      </body>
    </html>
  );
}
