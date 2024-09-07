'use client'

import React from 'react';
import AttendanceChart from '../components/AttendanceChart';
import Monthly from '../components/Monthly';
import Approval from '../components/Approval';
import Platform from '../components/Platform';
import CompanyNews from '../components/CompanyNews';
import MainLayout from '../Layout/MainLayout';
import { useState, useEffect } from 'react';
import Loading from '../dashboard/loading';
import DashboardWidget from '../components/DashboardWidget';
import TaskList from '../components/TaskList';


const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <MainLayout
        pageTitle="Dashboard | Next.js"
        description="Welcome to my Next.js app. Learn about the latest trends."
        keywords="Human Resource Info System, Vercel, Nextjs, React"
      >
        {isLoading ? <Loading /> :
          <div className='lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-2 gap-4 md:flex-shrink-0 flex flex-col mx-4 md:mx-auto lg:mx-auto'>

            {/* Dashboard Widget */}
            <DashboardWidget />

            {/* Company News */}
            <CompanyNews />

            {/* Attendance Chart */}
            <div className="lg:col-span-2 md:col-span-1">
              <div className="grid grid-cols-1 md:flex-shrink-0">
                <div className="rounded-lg shadow-lg bg-white p-4 lg:h-[410px] lg:w-full">
                  <h2 className="lg:mb-4 lg:text-lg lg:font-bold md:text-base md:font-bold md:mb-1">Attendance Overview</h2>
                  <AttendanceChart />
                </div>
              </div>
            </div>

            {/* Monthly Tardinesss */}
            <Monthly />

            {/* Task List */}
            <TaskList />

            {/* Needs Approval */}
            <Approval />

            {/* Platform Notice */}
            <Platform />
          </div>
        }
      </MainLayout>
    </>
  )
}

export default Dashboard
