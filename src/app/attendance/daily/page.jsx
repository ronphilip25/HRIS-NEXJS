'use client'

import MainLayout from '../../Layout/MainLayout';
import AttendanceWidget from '../../components/AttendanceWidget';
import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../../attendance/daily/loading'
import AttendanceCard from '../../components/AttendanceCard'
import EmployeeList from '../../components/EmployeeList'

const page = () => {

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
                pageTitle="Daily | Next.js"
                description="Welcome to my Next.js app. Learn about the latest trends."
                keywords="Human Resource Info System, Vercel, Nextjs, React"
            >
                {isLoading ? <Loading /> :
                    <div className='lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-2 gap-4 md:flex-shrink-0 flex flex-col mx-4 md:mx-auto lg:mx-auto'>

                        {/* Attendance Widget */}
                        <AttendanceWidget />

                        {/* Attendance Card */}
                        <AttendanceCard />

                        {/* Employee List */}
                        <EmployeeList />
                    </div>
                }
            </MainLayout>
        </>
    )
}

export default page
