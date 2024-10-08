'use client'

import MainLayout from '../../Layout/MainLayout';
import AttendanceWidget from '../components/AttendanceWidget';
import React from 'react'
import { useEffect } from 'react';
import { useNavbar } from '@/context/NavbarContext';

const page = () => {
  const { setPageTitle, setSubTitle } = useNavbar();

  useEffect(() => {
      setPageTitle("Attendance");
      setSubTitle("Weekly / Monthly Report");
  }, [setPageTitle]);

  return (
    <>
      <MainLayout
        pageTitle="Weekly/Monthly | Next.js"
        description="Welcome to my Next.js app. Learn about the latest trends."
        keywords="Next.js, React, SEO"
      >
        <div className='container mx-auto px-4 lg:h-auto md:overflow-x-auto md:h-screen overflow-x-scroll h-screen'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-4 lg:max-[1440px]:gap-2 lg:max-[1024px]:gap-2 md:grid md:grid-cols-2 md:gap-2 gap-4 md:flex-shrink-0 flex flex-col md:max-m-auto h-auto lg:max-mx-auto  mb-4 md:mb-4'>
            <AttendanceWidget />
            <div className="col-start-4 lg:block md:block">
              <div className="flex items-center lg:justify-end ">
                <div className="flex justify-center md:max-[768px]:mt-16 md:max-[768px]:w-auto  lg:mt-16 border relative bg-blue-700  text-white rounded-lg lg:w-36 lg:h-11 w-[100%] h-12 mt-9">
                  <button className=' text-white text-xs font-sans font-inter font-bold'>
                    <a href="/not-found">Download Excel</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-md col-span-4 lg:max-[1024px]:col-span-4 w-auto lg:max-[1024px]:h-[65vh] h-auto mt-1 pb-2">
              <div className="flex justify-between items-center lg:mt-3 lg:ml-3 lg:max-[1024px]:mt-1">
                <h5 className="text-2xl font-bold text-gray-700">Attendance</h5>
              </div>
              <div className="lg:grid lg:grid-cols-8 grid grid-cols-1 font-sans text-base font-bold text-gray-700 mt-2 lg:py-3 lg:px-3 overflow-x-auto h-[32vh] lg:h-[65vh] md:h-[18vh]">
                <div className="col-span-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-fixed">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-center border-b text-xs border-gray-700">Name</th>
                          <th className="text-center border-b text-xs border-gray-700">Department</th>
                          <th className="text-center border-b text-xs border-gray-700">Schedule</th>
                          <th className="text-center border-b text-xs border-gray-700">Worked Hour</th>
                          <th className="text-center border-b text-xs border-gray-700">Overtime</th>
                          <th className="text-center border-b text-xs border-gray-700">Holiday Work</th>
                          <th className="text-center border-b text-xs border-gray-700">Holiday OT</th>
                          <th className="text-center border-b text-xs border-gray-700">Leave</th>
                          <th className="text-center border-b text-xs border-gray-700">Tardiness</th>
                          <th className="text-center border-b text-xs border-gray-700">Under time</th>
                          <th className="text-center border-b text-xs border-gray-700">Absences</th>
                          <th className="text-center border-b text-xs border-gray-700">Custom Policy</th>
                        </tr>
                      </thead>
                      <tbody className="font-sans text-xs font-normal font-inter">
                        <tr className="even:bg-gray-200">
                          <td className="py-3 px-4 text-center">John Doe</td>
                          <td className="py-3 px-4 text-center">IT</td>
                          <td className="py-3 px-4 text-center">9 AM - 5 PM</td>
                          <td className="py-3 px-4 text-center">8 hrs</td>
                          <td className="py-3 px-4 text-center">2 hrs</td>
                          <td className="py-3 px-4 text-center">0</td>
                          <td className="py-3 px-4 text-center">1 hr</td>
                          <td className="py-3 px-4 text-center">0</td>
                          <td className="py-3 px-4 text-center">0</td>
                          <td className="py-3 px-4 text-center">0</td>
                          <td className="py-3 px-4 text-center">0</td>
                          <td className="py-3 px-4 text-center">N/A</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default page
