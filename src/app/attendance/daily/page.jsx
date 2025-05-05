'use client'

import MainLayout from '../../Layout/MainLayout';
import AttendanceWidget from '../components/AttendanceWidget';
import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../../attendance/daily/loading'
import AttendanceCard from '../daily/components/AttendanceCard'
import EmployeeList from '../daily/components/EmployeeList'
import { useNavbar } from '../../../context/NavbarContext'

const page = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an async operation (e.g., fetching data)
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const { setPageTitle, setSubTitle } = useNavbar();

    useEffect(() => {
        setPageTitle("Attendance");
        setSubTitle("Daily Report");
    }, [setPageTitle, setSubTitle]);

    return (
        <>
            <MainLayout
                pageTitle="Daily | Next.js"
                description="Welcome to my Next.js app. Learn about the latest trends."
                keywords="Human Resource Info System, Vercel, Nextjs, React"
            >
                {isLoading ? <Loading /> :
                    <div className='container mx-auto px-4 md:max-w-auto md:h-auto h-[90vh]'>
                        <div className='lg:grid lg:grid-cols-4 lg:gap-4 lg:max-[1440px]:gap-2 md:grid md:grid-cols-2 md:gap-2 gap-4 md:flex-shrink-0 flex flex-col md:max-m-auto h-auto lg:max-mx-auto mb-4 md:mb-4'>

                            {/* Attendance Widget */}
                            <AttendanceWidget />

                            {/* Attendance Card */}
                            <AttendanceCard />

                            {/* Employee List */}
                            <EmployeeList />
                        </div>
                    </div>
                }
            </MainLayout>
        </>
    )
}

export default page
