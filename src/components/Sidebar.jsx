import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { MdOutlineDashboard } from "react-icons/md";
import { LuCalendarClock, LuClock4 } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation'


const Sidebar = ({ isOpen, nav }) => {
  const [expandedSections, setExpandedSections] = useState(true)

  const currentPath = usePathname();

  useEffect(() => {
    const storedSections = localStorage.getItem('expandedSections');
    if (storedSections) {
      setExpandedSections(JSON.parse(storedSections));
    }
  }, []);

  // Update localStorage whenever a section is toggled
  const toggleSection = (section) => {
    const updatedSections = {
      ...expandedSections,
      [section]: !expandedSections[section],
    };
    setExpandedSections(updatedSections);
    localStorage.setItem('expandedSections', JSON.stringify(updatedSections));
  };

  return (
    <>
      <div className={`flex flex-col lg:h-screen lg:max-[1024px]:h-screen overflow-auto sticky bg-white text-black border lg:max-[1024px]:hidden md:hidden ${isOpen ? 'lg:w-[286px] lg:max-[1024px]:w-[240px] md:w-[250px] w-[200px] lg:block md:block hidden' : 'lg:w-44 lg:max-[1024px]:w-32 md:w-32 w-36 lg:block md:block hidden'}  transition-all duration-500 shadow-lg`}>
        <div className="flex items-center justify-center p-4 bg-white">
          <Image src="/assets/hrislgo.png" width={200} height={200} priority={true} alt="Logo" className={` ${isOpen ? 'lg:h-[75px] lg:w-[75px] rounded-full border-4 border-blue-400 object-contain object-center md:h-[62px] md:w-[62px]' : 'hidden'}`} />
          <Image src="/assets/side.png" width={200} height={200} priority={true} alt="Logo" className={` ${isOpen ? ' hidden' : 'h-24 w-12 lg:h-24 lg:w-24 md:h-16 md:w-16 rounded-full border-4 border-blue-400 object-contain'}`} /> {/* Add your logo image here */}
        </div>

        <nav className={` ${isOpen ? 'flex flex-col mt-3' : 'justify-center items-center lg:text-4xl md:text-4xl text-4xl'} flex flex-col mt-2`}>
          <Link href="/dashboard" className={`flex items-center space-x-3 p-3 rounded-l-xl hover:bg-sky-100 ${isOpen ? 'justify-start ml-10' : 'rounded-xl'} ${currentPath === '/dashboard' ? ' bg-sky-100 font-bold' : ''}`}>
            <MdOutlineDashboard className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
            {isOpen && <span>Dashboard</span>}
          </Link>
          
          <div className="flex flex-col mt-2">
            <div className="collapse rounded-r-none">
              <input
                type="checkbox"
                className="peer"
                onChange={() => toggleSection('attendance')}
                checked={expandedSections['attendance'] || false}
              />
              <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ml-10' : 'justify-center rounded-xl'}`}>
                <div className="flex items-center space-x-3">
                  <LuClock4 className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                  {isOpen && <span>Attendance</span>}
                </div>
                {isOpen && (expandedSections['attendance'] ? <FaChevronUp /> : <FaChevronDown />)}
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['attendance'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                <div className="ml-24 flex flex-col space-y-2 border-l-2 border-gray-500">
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
              <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ml-10' : 'justify-center rounded-xl'}`}>
                <div className="flex items-center space-x-3">
                  <LuCalendarClock className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                  {isOpen && <span>Leaves</span>}
                </div>
                {isOpen && (expandedSections['leaves'] ? <FaChevronUp /> : <FaChevronDown />)}
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['leaves'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                <div className=" ml-24 flex flex-col space-y-2 border-l-2 border-gray-500">
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
              <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ml-10' : 'justify-center rounded-xl'}`}>
                <div className="flex items-center space-x-3">
                  <RiTeamLine className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                  {isOpen && <span>Team</span>}
                </div>
                {isOpen && (expandedSections['team'] ? <FaChevronUp /> : <FaChevronDown />)}
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['team'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                <div className=" ml-24 flex flex-col space-y-2 border-l-2 border-gray-500">
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
              <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 w-auto rounded-l-xl ${isOpen ? 'justify-start ml-10' : 'justify-center rounded-xl'}`}>
                <div className="flex items-center space-x-3">
                  <FaRegFile className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                  {isOpen && <span>Filing</span>}
                </div>
                {isOpen && (expandedSections['filing'] ? <FaChevronUp /> : <FaChevronDown />)}
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['filing'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                <div className=" ml-24 flex flex-col space-y-2 border-l-2 border-gray-500">
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
              <div className={`collapse-title peer-checked:bg-sky-100 peer-checked:font-bold flex items-center justify-between p-3 h-auto w-auto rounded-l-xl ${isOpen ? 'justify-start ml-10' : 'justify-center rounded-xl'}`}>
                <div className="flex items-center space-x-3">
                  <IoSettingsOutline className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                  {isOpen && <span>Setting</span>}
                </div>
                {isOpen && (expandedSections['setting'] ? <FaChevronUp /> : <FaChevronDown />)}
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && expandedSections['setting'] ? 'max-h-40' : 'max-h-0 max-w-0'}`}>
                <div className=" ml-24 flex flex-col space-y-2 border-l-2 border-gray-500">
                <Link href="/setting/company_settings" className={`${currentPath === '/setting/company_settings' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Company Settings</Link>
                <Link href="/setting/admin_settings" className={`${currentPath === '/setting/admin_settings' ? 'text-blue-500 font-bold' : ' text-gray-500'} p-2 rounded-md text-sm`}>Admin Settings</Link>
                </div>
              </div>
            </div>
          </div>
          
        </nav>
      </div>
    </>
  )
}

export default Sidebar

{/* <button onClick={() => toggleSection('attendance')} className={`flex items-center justify-between p-3 rounded-l-xl hover:bg-sky-100 ${isOpen ? 'justify-start ml-10' : 'justify-center'}`}>
              <div className="flex items-center space-x-3">
                <LuClock4 className={`${isOpen ? 'text-3xl' : 'text-4xl'}`} />
                {isOpen && <span>Attendance</span>}
              </div>
              {isOpen && (expandedSections['attendance'] ? <FaChevronUp /> : <FaChevronDown />)}
            </button>
            {expandedSections['attendance'] && isOpen && (
              <div className="ml-24 flex flex-col space-y-2 border-l-2 border-gray-500">
                <Link href="/attendance/daily" className="p-2 rounded-md hover:bg-gray-100 text-sm">Daily</Link>
                <Link href="/attendance/monthly" className="p-2 rounded-md hover:bg-gray-100 text-sm">Weekly/Monthly</Link>
                <Link href="/attendance/schedule_settings" className="p-2 rounded-md hover:bg-gray-100 text-sm">Schedule Settings</Link>
              </div>
            )} */}