'use client'

import React from 'react';
import AttendanceChart from '../../components/AttendanceChart';
import Monthly from '../../components/Monthly';
import Approval from '../../components/Approval';
import Platform from '../../components/Platform';
import CompanyNews from '../../components/CompanyNews';
import MainLayout from '../Layout/MainLayout';
import { useState, useEffect } from 'react';
import Loading from '../dashboard/loading';
import TaskList from '../../components/TaskList';
import StatusCard from '../../components/StatusCard';
import { useNavbar } from '../../context/NavbarContext';


const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { setPageTitle, setSubTitle } = useNavbar();

  useEffect(() => {
      setPageTitle("Administrator");
      setSubTitle("Dashboard");
  }, [setPageTitle]);


  return (
    <>
      <MainLayout
        pageTitle="Dashboard | Next.js"
        description="Welcome to my Next.js app. Learn about the latest trends."
        keywords="Human Resource Info System, Vercel, Nextjs, React"
      >
        {isLoading ? <Loading /> :
          <div className='container mx-auto px-4 lg:h-auto md:overflow-x-auto md:h-screen overflow-x-scroll h-screen'>
            <div className='lg:grid lg:grid-cols-4 lg:gap-4 lg:max-[1440px]:gap-2 lg:max-[1024px]:gap-2 md:grid md:grid-cols-2 md:gap-2 gap-4 md:flex-shrink-0 flex flex-col md:max-m-auto h-auto lg:max-mx-auto mb-4 md:mb-4'>
                <StatusCard
                  color="#D0E9FE"
                  iconColor="#045CA4"
                  title="Attended"
                  count={25}
                />
                <StatusCard
                  color="#F0E1F1"
                  iconColor="#AC5BB3"
                  title="On Leave"
                  count={3}
                />
                <StatusCard
                  color="#FAD2D2"
                  iconColor="#E94545"
                  title="Absent"
                  count={1}
                />
              <CompanyNews />
              <div className="lg:col-span-2 md:col-span-2 ">
                <div className="grid grid-cols-1 md:flex-shrink-0">
                  <div className="rounded-lg shadow-lg bg-white p-4 lg:w-full">
                    <h2 className="lg:mb-4 lg:text-lg lg:font-bold md:text-base md:font-bold md:mb-1 text-black lg:max-[1440px]:text-base">Attendance Overview</h2>
                    <AttendanceChart />
                  </div>
                </div>
              </div>
              <Monthly />
              <TaskList />
              <Approval />
              <Platform />
            </div>
          </div>}
      </MainLayout>
    </>
  )
}

export default Dashboard
