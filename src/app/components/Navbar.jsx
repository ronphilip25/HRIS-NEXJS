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

    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  const [expandedSections, setExpandedSections] = useState(true)

  const toggleSection = (section) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className={`${isOpen ? 'w-[1657px]' : 'w-full'}  w-auto lg:max-[1440px]:max-w-auto transition-width duration-500 ease-in-out lg:relative md:relative flex lg:h-20 md:h-16 lg:max-[1024px]:h-16 h-20 items-center justify-center bg-white border rounded-sm border-gray-200`}>
        <div>
          <button aria-label="Open sidebar" onClick={toggleSidebar} className="lg:flex md:flex items-center justify-center p-2 rounded-lg border-sky-200 border-2 ml-5 hidden ">
            {isOpen ? <ChevronsLeft className='text-sky-200 text-6xl' /> : <ChevronsRight className='text-sky-200 text-6xl' />}
          </button>
        </div>
        <div>
          <button aria-label="Open settings" onClick={toggleNav} className="flex items-center justify-center p-2 rounded-lg border-sky-200 border-2 ml-5 md:hidden sm:flex ">
            {nav ? <ChevronsLeft className='text-sky-200 text-6xl' /> : <ChevronsRight className='text-sky-200 text-6xl' />}
          </button>
        </div>
        <div className="flex w-full justify-between px-5">
          <h1 className="text-lg font-semibold text-gray-900"><span id="navbarText">Dashboard</span></h1>
          <span id="subtext"></span>
          <div className='flex items-center justify-end'>
            <Image
              src="/assets/user.png"
              width={40}
              height={40}
              priority={true}
              className="mr-2 h-12 w-12 rounded-full border border-green-500 bg-gray-100"
              alt="Profile Icon"
            />
            <button
              aria-label="Open settings"
              className="mt-1 flex items-center justify-between"
              onClick={toggleDropdown}
            >
              <div className="text-left">
                <div className="flex items-center justify-end">
                  <div className="font-sans text-base font-bold text-gray-600">User Name</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-4 w-4"
                    viewBox="0 0 512 512"
                    id="dropdown"
                  >
                    <path d="M128 192l128 128 128-128z"></path>
                  </svg>
                </div>
                <div className="font-sans text-sm font-normal text-gray-600">Admin</div>
              </div>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-14 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-transform duration-300 ease-out ${isDropdownOpen ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2"
                }`}
            >
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}

        </div>
      </nav>


      {/* Mobile Sidebar */}

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white/70 z-40' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen bg-white shadow-md p-10 ease-in duration-300 overflow-y-auto z-50' : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500 z-50'}>
          <div className='flex w-full items-center justify-between'>
            <div>
              {/* <Image src="/assets/hrislgo.png" width={75} height={60} className="mr-2 h-16 w-full" alt="Profile Icon" /> */}
              <h1 className="text-xl font-semibold text-gray-900 "><span id="navbarText">Human Resource Info System</span></h1>
            </div>
            <div onClick={toggleNav} className="flex">
              <button aria-label="Open settings" ><SlClose className='text-sky-200 text-4xl' /></button>
            </div>
          </div>
          <nav className='flex flex-col mt-8'>
            <a href="/dashboard" className='flex items-center space-x-3 p-3 rounded-l-xl hover:bg-sky-100'>
              <MdOutlineDashboard className='text-4xl' />
              <span>Dashboard</span>
            </a>
            <div className="flex flex-col mt-2">
              <button aria-label="Open settings" onClick={() => toggleSection('attendance')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
                <div className="flex items-center space-x-3">
                  <LuClock4 className='text-4xl' />
                  <span>Attendance</span>
                </div>
                {isOpen && (expandedSections.attendance ? <FaChevronUp /> : <FaChevronDown />)}
              </button>
              {expandedSections.attendance && (
                <div className="ml-10 flex flex-col space-y-2">
                  <a href="/attendance/daily" className="p-2 rounded-md hover:bg-gray-100 text-sm">Daily</a>
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Weekly/Monthly</a>
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Schedule Settings</a>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-2">
              <button aria-label="Open settings" onClick={() => toggleSection('leaves')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
                <div className="flex items-center space-x-3">
                  <LuCalendarClock className='text-4xl' />
                  <span>Leaves</span>
                </div>
                {isOpen && (expandedSections.leaves ? <FaChevronUp /> : <FaChevronDown />)}
              </button>
              {expandedSections.leaves && (
                <div className="ml-10 flex flex-col space-y-2">
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Leave Usage History</a>
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Manual Grant</a>
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Leave Setting</a>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-2">
              <button aria-label="Open settings" onClick={() => toggleSection('team')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
                <div className="flex items-center space-x-3">
                  <RiTeamLine className='text-4xl' />
                  <span>Team</span>
                </div>
                {isOpen && (expandedSections.team ? <FaChevronUp /> : <FaChevronDown />)}
              </button>
              {expandedSections.team && (
                <div className="ml-10 flex flex-col space-y-2">
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Employees</a>
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Organization</a>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-2">
              <button aria-label="Open settings" onClick={() => toggleSection('filing')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
                <div className="flex items-center space-x-3">
                  <FaRegFile className='text-4xl' />
                  <span>Filing</span>
                </div>
                {isOpen && (expandedSections.filing ? <FaChevronUp /> : <FaChevronDown />)}
              </button>
              {expandedSections.filing && (
                <div className="ml-10 flex flex-col space-y-2">
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Approval Management</a>
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Filing Settings</a>
                </div>
              )}
            </div>
            <div className="flex flex-col mt-2">
              <button aria-label="Open settings" onClick={() => toggleSection('settings')} className='flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100'>
                <div className="flex items-center space-x-3">
                  <IoSettingsOutline className='text-4xl' />
                  <span>Settings</span>
                </div>
                {isOpen && (expandedSections.settings ? <FaChevronUp /> : <FaChevronDown />)}
              </button>
              {expandedSections.settings && (
                <div className="ml-10 flex flex-col space-y-2">
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Company Settings</a>
                  <a href="/not-found" className="p-2 rounded-md hover:bg-gray-100 text-sm">Admin Settings</a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}