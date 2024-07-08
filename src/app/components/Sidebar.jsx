import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { MdOutlineDashboard } from "react-icons/md";
import { LuCalendarClock, LuClock4 } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from '../assets/logo.png'

const Sidebar = ({isOpen}) => {
  const [expandedSections, setExpandedSections] = useState(true)

  const toggleSection = (section) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  }
  return (
   <>
    <div className={`flex flex-col h-screen bg-white text-black border  ${isOpen ? 'w-[283px]' : 'w-44'} transition-all duration-500 shadow-lg`}>
      <div className="flex items-center justify-center p-4 bg-white">
        <Image src={Logo} alt="Logo" className={` ${isOpen ? 'h-10 w-10' : 'h-16 w-16 '}`} /> {/* Add your logo image here */}
      </div>
      <nav className={` ${isOpen ? 'flex flex-col mt-2' : 'justify-center items-center text-3xl'} flex flex-col mt-2`}>
        <a href="#" className={`flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 ${isOpen ? 'justify-start' : ''}`}>
          <MdOutlineDashboard/>
          {isOpen && <span>Dashboard</span>}
        </a>
        <div className="flex flex-col">
          <button onClick={() => toggleSection('attendance')} className={`flex items-center justify-between p-3 rounded-md hover:bg-gray-100 ${isOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="flex items-center space-x-3">
              <LuClock4 />
              {isOpen && <span>Attendance</span>}
            </div>
            {isOpen && (expandedSections['attendance'] ? <FaChevronUp /> : <FaChevronDown />)}
          </button>
          {expandedSections['attendance'] && isOpen && (
            <div className="ml-6 flex flex-col space-y-2">
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button onClick={() => toggleSection('leaves')} className={`flex items-center justify-between p-3 rounded-md hover:bg-gray-100 ${isOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="flex items-center space-x-3">
              <LuCalendarClock/>
              {isOpen && <span>Leaves</span>}
            </div>
            {isOpen && (expandedSections['leaves'] ? <FaChevronUp /> : <FaChevronDown />)}
          </button>
          {expandedSections['leaves'] && isOpen && (
            <div className="ml-6 flex flex-col space-y-2">
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button onClick={() => toggleSection('team')} className={`flex items-center justify-between p-3 rounded-md hover:bg-gray-100 ${isOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="flex items-center space-x-3">
              <RiTeamLine />
              {isOpen && <span>Team</span>}
            </div>
            {isOpen && (expandedSections['team'] ? <FaChevronUp /> : <FaChevronDown />)}
          </button>
          {expandedSections['team'] && isOpen && (
            <div className="ml-6 flex flex-col space-y-2">
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button onClick={() => toggleSection('filing')} className={`flex items-center justify-between p-3 rounded-md hover:bg-gray-100 ${isOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="flex items-center space-x-3">
              <FaRegFile />
              {isOpen && <span>Filing</span>}
            </div>
            {isOpen && (expandedSections['filing'] ? <FaChevronUp /> : <FaChevronDown />)}
          </button>
          {expandedSections['filing'] && isOpen && (
            <div className="ml-6 flex flex-col space-y-2">
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button onClick={() => toggleSection('settings')} className={`flex items-center justify-between p-3 rounded-md hover:bg-gray-100 ${isOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="flex items-center space-x-3">
              <IoSettingsOutline/>
              {isOpen && <span>Settings</span>}
            </div>
            {isOpen && (expandedSections['settings'] ? <FaChevronUp /> : <FaChevronDown />)}
          </button>
          {expandedSections['settings'] && isOpen && (
            <div className="ml-6 flex flex-col space-y-2">
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
            </div>
          )}
        </div>
      </nav>
    </div>
   </>
    
  )
}

export default Sidebar
