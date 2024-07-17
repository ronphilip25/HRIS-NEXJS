'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'


export default function Navbar({ isOpen, toggleSidebar }) {
  
  return(
    <>
    <nav className={`${isOpen ? 'w-[1657px]' : 'w-full'} w-full transition-width duration-500 ease-in-out overflow-x-hidden  relative flex h-20 items-center justify-center bg-white border rounded-sm border-gray-200`}>
      {/* Toggle button */}
      <div>
        <button onClick={toggleSidebar} className="flex items-center justify-center p-2 rounded-lg border-sky-200 border-2 ml-5 ">
          {isOpen ? <ChevronsLeft className='text-sky-200 text-6xl' /> : <ChevronsRight className='text-sky-200 text-6xl' />}
        </button>
      </div>
      <div className="flex w-full justify-between px-4">
        <h1 className="text-lg font-semibold text-gray-900"><span id="navbarText">Dashboard</span></h1>
        <span id="subtext"></span>
        <div className="flex items-center justify-end">
          <Image src="/assets/user.png" width={40} height={40} priority={true} className="mr-2 h-12 w-12 rounded-full bg-gray-100 " alt="Profile Icon" />
          <button className="mt-1 flex items-center justify-between">
            <div className="text-left">
              <div className="flex items-center justify-end">
                <div className="font-sans text-base font-bold text-gray-600">User Name</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-4 w-4" viewBox="0 0 512 512" id="dropdown"><path d="M128 192l128 128 128-128z"></path></svg>
              </div>
              <div className="font-sans text-sm font-normal text-gray-600">Admin</div>
            </div>
          </button>
        </div>
      </div>
    </nav>
</>
  )
}