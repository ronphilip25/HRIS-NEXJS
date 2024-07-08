'use client'

import { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [isSidebarOpen, setSidebarOpen] = useState(true)
  console.log("setSidebarOpen:", setSidebarOpen);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between">
        <Navbar onToggle={() => setSidebarOpen(!isSidebarOpen)} />
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen}/>} 
        </div> 
        {children}
      </body>
    </html>
  );
}
