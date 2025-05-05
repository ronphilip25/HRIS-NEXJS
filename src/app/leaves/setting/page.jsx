'use client'

import React, { useEffect } from 'react'
import MainLayout from '../../Layout/MainLayout'
import { useNavbar } from '../../../context/NavbarContext'

const Page = () => {
    const { setPageTitle, setSubTitle } = useNavbar()

    useEffect(() => {
        setPageTitle('Leaves')
        setSubTitle('Leave Settings')
    }, [setPageTitle, setSubTitle])

    return (
        <MainLayout
            pageTitle="Leave Settings | Next.js"
            description="Welcome to my Next.js app. Learn about the latest trends."
            keywords="Next.js, React, SEO"
        >
            <div className="flex flex-col gap-4 p-4">
                {/* First Section */}
                <div className="rounded-lg bg-white shadow-lg p-4 space-y-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="text-base font-bold text-blue-500">Applicable days prior the date of leave</div>
                        <div className="text-sm text-gray-600 mt-2 md:mt-0">Applicable days prior to date of leave</div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <p className="text-sm text-blue-500">
                            Indicate the appropriate lead time for employees to submit leave requests by selecting the applicable days prior to the leave date.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <div className="relative inline-block text-left">
                                <button
                                    type="button"
                                    className="inline-flex justify-between items-center w-full sm:w-[264px] h-[34px] px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    1 Day(s)
                                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <button
                                className="h-[41px] w-[77px] rounded-lg bg-sky-800 text-white font-bold hover:scale-105 transition-transform"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Annual Leave Card */}
                    <div className="bg-white shadow-lg rounded-lg p-5 space-y-3">
                        <div className="flex justify-between">
                            <h2 className="font-bold text-gray-700">Annual Leave Settings (for Regular)</h2>
                            <button className="text-sm text-blue-600">Settings</button>
                        </div>
                        {[
                            ['Allowable Duration', 'One Day'],
                            ['Start of Crediting', 'Fiscal Year'],
                            ['Expiration Policy', 'Expires after 1 year'],
                            ['1st year Prorated Rule Set-up', '1 day(s) every 1 month(s)'],
                            ['Expiration Policy', 'Expires after 1 year'],
                            ['Approval Process', 'Level 1 Approver (Level 1 Head)'],
                        ].map(([label, value], index) => (
                            <div key={index} className="flex justify-between border-b border-gray-300 py-2">
                                <span className="text-sm text-gray-400">{label}</span>
                                <span className="text-sm font-bold text-gray-400">{value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Special Leave Card */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-base font-bold text-gray-700 mb-5">Special Leave Settings (for Non-Regular)</h2>
                            <div className="flex justify-end">
                                <button className="h-[55px] w-[103px] rounded-lg bg-sky-800 text-white font-bold hover:scale-105 transition-transform">
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-5 space-y-3">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-gray-700">Special Leave 1</h3>
                                <button className="h-8 w-8 flex items-center justify-center">
                                    <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a2 2 0 100-4 2 2 0 000 4zM12 12a2 2 0 100-4 2 2 0 000 4zM12 18a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </div>
                            {[
                                ['Employment Type', 'Intern/Part-Time'],
                                ['Allowable Leaves', 'One Day'],
                                ['Leave Credits', '1 day(s) every 1 month(s)'],
                                ['Expiration Policy', 'None'],
                                ['Approval Process', 'Level 1 Approver (Level 1 Head)'],
                            ].map(([label, value], index) => (
                                <div key={index} className="flex justify-between border-b border-gray-300 py-2">
                                    <span className="text-sm text-gray-400">{label}</span>
                                    <span className="text-sm font-bold text-gray-400">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Leave Card */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-white shadow-lg rounded-lg p-5">
                            <h2 className="text-base font-bold text-gray-700 mb-5">Other Leave Sample</h2>
                            <div className="flex justify-end">
                                <button className="h-[55px] w-[103px] rounded-lg bg-sky-800 text-white font-bold hover:scale-105 transition-transform">
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-5 space-y-3">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-gray-700">Special Leave 1</h3>
                                <button className="h-8 w-8 flex items-center justify-center">
                                    <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a2 2 0 100-4 2 2 0 000 4zM12 12a2 2 0 100-4 2 2 0 000 4zM12 18a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </div>
                            {[
                                ['Grant Leave', 'Upon Application'],
                                ['Days Granted', '1 Day'],
                                ['Salary Payment Status', 'Unpaid'],
                                ['Approval Process', 'Level 1 (ja)'],
                            ].map(([label, value], index) => (
                                <div key={index} className="flex justify-between border-b border-gray-300 py-2">
                                    <span className="text-sm text-gray-400">{label}</span>
                                    <span className="text-sm font-bold text-gray-400">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page
