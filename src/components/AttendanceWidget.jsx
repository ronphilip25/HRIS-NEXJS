'use client'

import React from 'react';
import { useState, useEffect } from 'react';

const AttendanceWidget = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => setCurrentDate(new Date());

    // Update the date every minute
    const intervalId = setInterval(updateDate, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format date as needed
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      {/* Period Card */}
      <div className="rounded-lg shadow-md bg-white w-full lg:h-[119px] p-2 col-start-1">
        <h2 className="text-md text-black ml-2 mt-2 font-normal">Period</h2>
        <div className="relative font-inter font-sans">
          <div className="rounded-lg border border-gray-600 w-full mt-4">
            <div className="font-sans font-inter lg:text-base lg:max-[1024px]:text-base lg:max-[1024px]:py-2 font-bold text-gray-700 lg:py-[7px] md:text-xs md:py-[8px] py-[8px] md:p-2 flex justify-center mr-4">
              <div className="mr-4 lg:block md:hidden lg:max-[1024px]:hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.74913 2.5C7.74913 2.30109 7.67011 2.11032 7.52946 1.96967C7.3888 1.82902 7.19804 1.75 6.99913 1.75C6.80021 1.75 6.60945 1.82902 6.46879 1.96967C6.32814 2.11032 6.24913 2.30109 6.24913 2.5V4.08C4.80912 4.195 3.86512 4.477 3.17112 5.172C2.47612 5.866 2.19412 6.811 2.07812 8.25H21.9201C21.8041 6.81 21.5221 5.866 20.8271 5.172C20.1331 4.477 19.1881 4.195 17.7491 4.079V2.5C17.7491 2.30109 17.6701 2.11032 17.5295 1.96967C17.3888 1.82902 17.198 1.75 16.9991 1.75C16.8002 1.75 16.6094 1.82902 16.4688 1.96967C16.3281 2.11032 16.2491 2.30109 16.2491 2.5V4.013C15.5841 4 14.8381 4 13.9991 4H9.99913C9.16012 4 8.41412 4 7.74913 4.013V2.5Z"
                    fill="#045CA4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 12C2 11.161 2 10.415 2.013 9.75H21.987C22 10.415 22 11.161 22 12V14C22 17.771 22 19.657 20.828 20.828C19.657 22 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2 19.657 2 17.771 2 14V12ZM17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z"
                    fill="#05AEF3"
                  />
                </svg>
              </div>
              <div className='lg:max-[1024px]:mx-auto]:'>{formatDate(currentDate)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Card */}
      <div className="rounded-lg shadow-md bg-white w-full lg:h-auto p-2 col-start-2">
        <h2 className="text-md text-black ml-2 mt-2 font-normal">Department</h2>
        <div className="relative inline-block w-full mt-4">
          <button
            type="button"
            onClick={toggleDropdown}
            id="menu-button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            className="flex items-center justify-between py-[8px] lg:text-base lg:max-[1024px]:text-sm lg:max-[1024px]:py-3 md:text-xs w-full rounded-lg bg-white text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700"
          >
            <div className="flex ml-2">Select Departments</div>
            <div className="flex justify-end mr-4 mt-[1.5]">
              <svg className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
          <div id="dropdown-menu" className={`absolute z-10 right-0 mt-2 w-full bg-white rounded-md shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
            <ul className="py-1">
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Marketing</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sales</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">HR</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Finance</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Employees Card */}
      <div className="rounded-lg shadow-md lg:max-[1024px]:w-auto bg-white w-full lg:h-auto p-2 col-start-3">
        <h2 className="text-md text-black ml-2 mt-2 flex font-normal text-base">Employees</h2>
        <div className="relative mt-[1rem] lg:text-base md:text-xs">
          <input
            type="text"
            placeholder="Search Employees"
            className="px-4 py-[8px] rounded-md w-full border border-gray-700 bg-white"
          />
        </div>
      </div>
    </>
  );
};

export default AttendanceWidget;
