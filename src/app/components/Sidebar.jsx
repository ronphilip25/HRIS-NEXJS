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
import Side from '../assets/sidelogo.png'

const Sidebar = ({ isOpen }) => {
  const [expandedSections, setExpandedSections] = useState(true)
  

  const toggleSection = (section) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  }
  return (
    <>
      <div className={`flex flex-col h-screen bg-white text-black border   ${isOpen ? 'lg:w-[286px] md:w-[250px] w-[200px] lg:block md:block hidden' : 'lg:w-44 md:w-34 md:h- w-36 '}  transition-all duration-500 shadow-lg`}>
        <div className="flex items-center justify-center p-4 bg-white">
          <Image src={Side} priority={true} alt="Logo" className={` ${isOpen ? 'lg:h-[64px] lg:w-[157px] object-contain object-center md:h-[62px] md:w-[140px]' : 'hidden'}`} />
          <Image src={Logo} priority={true} alt="Logo" className={` ${isOpen ? ' hidden' : 'h-12 w-12 lg:h-16 lg:w-16 md:h-16 md:w-16'}`} /> {/* Add your logo image here */}
        </div>
        <nav className={` ${isOpen ? 'flex flex-col mt-3' : 'justify-center items-center lg:text-4xl md:text-4xl text-4xl'} flex flex-col mt-2`}>
          <a href="#" className={`flex items-center space-x-3 p-3 rounded-l-xl hover:bg-sky-100 ${isOpen ? 'justify-start ml-10' : ''}`}>
            <MdOutlineDashboard className={`${isOpen ? 'text-3xl' : 'text-4xl'}`}/>
            {isOpen && <span>Dashboard</span>}
          </a>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('attendance')} className={`flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100 ${isOpen ? 'justify-start ml-10' : 'justify-center'}`}>
              <div className="flex items-center space-x-3">
                <LuClock4 className={`${isOpen ? 'text-3xl' : 'text-4xl'}`}/>
                {isOpen && <span>Attendance</span>}
              </div>
              {isOpen && (expandedSections['attendance'] ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections['attendance'] && isOpen && (
              <div className="ml-24 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('leaves')} className={`flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100 ${isOpen ? 'justify-start ml-10' : 'justify-center'}`}>
              <div className="flex items-center space-x-3">
                <LuCalendarClock className={`${isOpen ? 'text-3xl' : 'text-4xl'}`}/>
                {isOpen && <span>Leaves</span>}
              </div>
              {isOpen && (expandedSections['leaves'] ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections['leaves'] && isOpen && (
              <div className="ml-24 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('team')} className={`flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100 ${isOpen ? 'justify-start ml-10' : 'justify-center'}`}>
              <div className="flex items-center space-x-3">
                <RiTeamLine className={`${isOpen ? 'text-3xl' : 'text-4xl'}`}/>
                {isOpen && <span>Team</span>}
              </div>
              {isOpen && (expandedSections['team'] ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections['team'] && isOpen && (
              <div className="ml-24 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('filing')} className={`flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100 ${isOpen ? 'justify-start ml-10' : 'justify-center'}`}>
              <div className="flex items-center space-x-3">
                <FaRegFile className={`${isOpen ? 'text-3xl' : 'text-4xl'}`}/>
                {isOpen && <span>Filing</span>}
              </div>
              {isOpen && (expandedSections['filing'] ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections['filing'] && isOpen && (
              <div className="ml-24 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <button onClick={() => toggleSection('settings')} className={`flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100  ${isOpen ? 'justify-start ml-10' : 'justify-center'}`}>
              <div className="flex items-center space-x-3">
                <IoSettingsOutline className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                {isOpen && <span>Settings</span>}
              </div>
              {isOpen && (expandedSections['settings'] ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections['settings'] && isOpen && (
              <div className="ml-24 flex flex-col space-y-2">
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 1</a>
                <a href="#" className="p-2 rounded-md hover:bg-gray-100">Submenu 2</a>
              </div>
            )}
          </div>
        </nav>
      </div>


      {/* mobile sidebar */}

            {/* <div className={`${ isOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}`}>
              <div className={`${ isOpen ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-r from-slate-300 to-gray-100 p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }`}>
                
              </div>
            </div> */}

    </>

  )
}

export default Sidebar
