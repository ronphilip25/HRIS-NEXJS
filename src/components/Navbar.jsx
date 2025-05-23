'use client'

import React from 'react'
import Link from 'next/link'
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
import { useNavbar } from '@/context/NavbarContext'
import { usePathname } from 'next/navigation'


export default function Navbar({ isOpen, toggleSidebar }) {
  const [nav, setNav] = useState(false)
  const { pageTitle, subTitle } = useNavbar();

  const currentPath = usePathname();

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
          <button aria-label="Open sidebar" onClick={toggleSidebar} className="lg:flex lg:max-[1024px]:hidden items-center justify-center p-2 rounded-lg border-sky-200 border-2 ml-5 hidden ">
            {isOpen ? <ChevronsLeft className='text-sky-200 text-6xl' /> : <ChevronsRight className='text-sky-200 text-6xl' />}
          </button>
        </div>
        <div>
          <button aria-label="Open settings" onClick={toggleNav} className="flex items-center justify-center p-2 rounded-lg border-sky-200 border-2 ml-5 md:max-[1024px]:flex md:hidden lg:max-[1024px]:flex sm:flex ">
            {nav ? <ChevronsLeft className='text-sky-200 text-6xl' /> : <ChevronsRight className='text-sky-200 text-6xl' />}
          </button>
        </div>
        <div className="flex w-full justify-between px-5">
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-gray-900">{pageTitle}</h1> {/* Adjust size here */}
            {subTitle && <h2 className="text-xl font-bold text-black">{subTitle}</h2>} {/* Smaller size for subtitle */}
          </div>
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

      <div className={nav ? 'md:max-[768px]:flex text-black fixed left-0 top-0 w-full h-screen bg-white/70 z-40' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white shadow-md p-10 ease-in duration-300 overflow-y-auto z-50' : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500 z-50'}>
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
            <Link href="/dashboard" className={`${currentPath === '/dashboard' ? 'font-bold bg-sky-100' : ''} flex items-center space-x-3 p-3 rounded-xl hover:bg-sky-100`} >
              <MdOutlineDashboard className='text-4xl' />
              <span>Dashboard</span>
            </Link>

            <div className="flex flex-col mt-2">
              <div className="collapse rounded-r-none">
                <input
                  type="checkbox"
                  className="peer"
                  onChange={() => toggleSection('attendance')}
                  checked={expandedSections['attendance'] || false}
                />
                <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ' : 'justify-center rounded-xl'}`}>
                  <div className="flex items-center space-x-3">
                    <LuClock4 className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                    {isOpen && <span>Attendance</span>}
                  </div>
                  {isOpen && (expandedSections['attendance'] ? <FaChevronUp /> : <FaChevronDown />)}
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['attendance'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                  <div className="ml-12 flex flex-col space-y-2 border-l-2 border-gray-500">
                    <Link href="/attendance/daily" className={`${currentPath === '/attendance/daily' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Daily</Link>
                    <Link href="/attendance/monthly" className={`${currentPath === '/attendance/monthly' ? 'text-blue-500 font-bold' : 'text-gray-500'} p-2 rounded-md text-sm`}>Weekly/Monthly</Link>
                    <Link href="/attendance/schedule_settings" className={`${currentPath === '/attendance/schedule_settings' ? 'text-blue-500 font-bold' : 'text-gray-500'} p-2 rounded-md text-sm`}>Schedule Settings</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <div className="collapse rounded-r-none">
                <input
                  type="checkbox"
                  className="peer"
                  onChange={() => toggleSection('leaves')}
                  checked={expandedSections['leaves'] || false}
                />
                <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ' : 'justify-center rounded-xl'}`}>
                  <div className="flex items-center space-x-3">
                    <LuCalendarClock className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                    {isOpen && <span>Leaves</span>}
                  </div>
                  {isOpen && (expandedSections['leaves'] ? <FaChevronUp /> : <FaChevronDown />)}
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['leaves'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                  <div className=" ml-12 flex flex-col space-y-2 border-l-2 border-gray-500">
                    <Link href="/leaves/usage" className={`${currentPath === '/leaves/usage' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Leave Usage History</Link>
                    <Link href="/leaves/manual" className={`${currentPath === '/leaves/manual' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Manual Grant</Link>
                    <Link href="/leaves/setting" className={`${currentPath === '/leaves/setting' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Leave Settings</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <div className="collapse rounded-r-none">
                <input
                  type="checkbox"
                  className="peer"
                  onChange={() => toggleSection('team')}
                  checked={expandedSections['team'] || false}
                />
                <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ' : 'justify-center rounded-xl'}`}>
                  <div className="flex items-center space-x-3">
                    <RiTeamLine className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                    {isOpen && <span>Team</span>}
                  </div>
                  {isOpen && (expandedSections['team'] ? <FaChevronUp /> : <FaChevronDown />)}
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['team'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                  <div className=" ml-12 flex flex-col space-y-2 border-l-2 border-gray-500">
                    <Link href="/team/employees" className={`${currentPath === '/team/employees' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Employees</Link>
                    <Link href="/team/organization" className={`${currentPath === '/team/organization' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Organization</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <div className="collapse rounded-r-none">
                <input
                  type="checkbox"
                  className="peer"
                  onChange={() => toggleSection('filing')}
                  checked={expandedSections['filing'] || false}
                />
                <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ' : 'justify-center rounded-xl'}`}>
                  <div className="flex items-center space-x-3">
                    <FaRegFile className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                    {isOpen && <span>Filing</span>}
                  </div>
                  {isOpen && (expandedSections['filing'] ? <FaChevronUp /> : <FaChevronDown />)}
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['filing'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                  <div className=" ml-12 flex flex-col space-y-2 border-l-2 border-gray-500">
                    <Link href="/filing/approval_management" className={`${currentPath === '/filing/approval_management' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Approval Management</Link>
                    <Link href="/filing/filing_settings" className={`${currentPath === '/filing/filing_settings' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Filing Settings</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <div className="collapse rounded-r-none">
                <input
                  type="checkbox"
                  className="peer"
                  onChange={() => toggleSection('setting')}
                  checked={expandedSections['setting'] || false}
                />
                <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 h-auto w-auto rounded-l-xl ${isOpen ? 'justify-start ' : 'justify-center rounded-xl'}`}>
                  <div className="flex items-center space-x-3">
                    <IoSettingsOutline className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                    {isOpen && <span>Setting</span>}
                  </div>
                  {isOpen && (expandedSections['setting'] ? <FaChevronUp /> : <FaChevronDown />)}
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['setting'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                  <div className=" ml-12 flex flex-col space-y-2 border-l-2 border-gray-500">
                    <Link href="/setting/company_settings" className={`${currentPath === '/setting/company_settings' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Company Settings</Link>
                    <Link href="/setting/admin_settings" className={`${currentPath === '/setting/admin_settings' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Admin Settings</Link>
                  </div>
                </div>
              </div>
            </div>

          </nav>
        </div>
      </div>
    </>
  )
}