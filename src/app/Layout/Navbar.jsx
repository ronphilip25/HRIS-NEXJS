'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { MdOutlineDashboard } from "react-icons/md";
import { LuCalendarClock, LuClock4 } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { SlClose } from "react-icons/sl";
import { useState } from 'react'


export default function Navbar({ isOpen, toggleSidebar }) {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  const [expandedSections, setExpandedSections] = useState(true)


  const toggleSection = (section) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  }

  return (
    <>
      <nav className={`${isOpen ? 'w-[1657px]' : 'w-full'} w-full transition-width duration-500 ease-in-out overflow-x-hidden relative flex h-20 items-center justify-center bg-white border rounded-sm border-gray-200`}>
        {/* Toggle button */}
        <div>
          <button onClick={toggleSidebar} className="lg:flex md:flex items-center justify-center p-2 rounded-lg border-sky-200 border-2 ml-5 hidden ">
            {isOpen ? <ChevronsLeft className='text-sky-200 text-6xl' /> : <ChevronsRight className='text-sky-200 text-6xl' />}
          </button>
        </div>
        <div>
          <button onClick={toggleNav} className="flex items-center justify-center p-2 rounded-lg border-sky-200 border-2 ml-5 md:hidden sm:flex ">
            {nav ? <ChevronsLeft className='text-sky-200 text-6xl' /> : <ChevronsRight className='text-sky-200 text-6xl' />}
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


      {/* Mobile Sidebar */}

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
      <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white shadow-md p-10 ease-in duration-500 overflow-y-auto' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div className='flex w-full items-center justify-between'>
          <div>
            <Image src="/assets/sidelogo.png" width={75} height={60} className="mr-2 h-16 w-full" alt="Profile Icon" />
          </div>
          <div onClick={toggleNav} className="flex">
            <button><SlClose className='text-sky-200 text-4xl' /></button>
          </div>
        </div>
        <nav className='flex flex-col mt-2'>
          <a href="/dashboard" className='flex items-center space-x-3 p-3 rounded-l-xl hover:bg-sky-100'>
            <MdOutlineDashboard className='text-4xl' />
            <span>Dashboard</span>
          </a>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('attendance')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
              <div className="flex items-center space-x-3">
                <LuClock4 className='text-4xl' />
                <span>Attendance</span>
              </div>
              {isOpen && (expandedSections.attendance ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections.attendance && (
              <div className="ml-10 flex flex-col space-y-2">
                <a href="/attendance/daily" className="p-2 rounded-md hover:bg-gray-100 text-sm">Daily</a>
                <a href="/attendance/monthly" className="p-2 rounded-md hover:bg-gray-100 text-sm">Weekly/Monthly</a>
                <a href="/attendance/schedule_settings" className="p-2 rounded-md hover:bg-gray-100 text-sm">Schedule Settings</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('leaves')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
              <div className="flex items-center space-x-3">
                <LuCalendarClock className='text-4xl' />
                <span>Leaves</span>
              </div>
              {isOpen && (expandedSections.leaves ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections.leaves && (
              <div className="ml-10 flex flex-col space-y-2">
                <a href="/leaves/usage" className="p-2 rounded-md hover:bg-gray-100 text-sm">Leave Usage History</a>
                <a href="/leaves/manual" className="p-2 rounded-md hover:bg-gray-100 text-sm">Manual Grant</a>
                <a href="/leaves/setting" className="p-2 rounded-md hover:bg-gray-100 text-sm">Leave Setting</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('team')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
              <div className="flex items-center space-x-3">
                <RiTeamLine className='text-4xl' />
                <span>Team</span>
              </div>
              {isOpen && (expandedSections.team ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections.team && (
              <div className="ml-10 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-sm">Employees</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-sm">Organization</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('filing')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
              <div className="flex items-center space-x-3">
                <FaRegFile className='text-4xl' />
                <span>Filing</span>
              </div>
              {isOpen && (expandedSections.filing ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections.filing && (
              <div className="ml-10 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-sm">Approval Management</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-sm">Filing Settings</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('settings')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
              <div className="flex items-center space-x-3">
                <IoSettingsOutline className='text-4xl' />
                <span>Settings</span>
              </div>
              {isOpen && (expandedSections.settings ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections.settings && (
              <div className="ml-10 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-sm">Company Settings</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-sm">Admin Settings</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>

    </>
  )
}