'use client'

import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import { useNavbar } from '../../../context/NavbarContext'
import { useEffect } from 'react'

const page = () => {

    const { setPageTitle, setSubTitle } = useNavbar();

    useEffect(() => {
        setPageTitle("Leaves");
        setSubTitle("Leave Settings");
    }, [setPageTitle, setSubTitle]);


    return (
        <>

            <MainLayout
                pageTitle="Leave Settings | Next.js"
                description="Welcome to my Next.js app. Learn about the latest trends."
                keywords="Next.js, React, SEO"
            >
                <div className="flex flex-col">
                    <div className="h-[106px] rounded-lg bg-white shadow-lg">
                        <div className="mt-6 flex items-center justify-between px-4">
                            <div className="text-normal font-inter font-sans font-bold text-blue-500">Applicable days prior the date of leave</div>
                            <div className="mr-32 font-sans text-sm font-normal text-gray-600">Applicable days prior to date of leave</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="ml-4 font-sans text-sm font-normal text-blue-500">Indicate the appropriate lead time for employees to submit leave requests by selecting the applicable days prior to the leace date.</div>
                            <div className="flex items-center justify-between">
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" className="mr-4 inline-flex h-[34px] w-[264px] justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            1 Day(s)
                                            {/* <!-- Heroicon name: solid/chevron-down --> */}
                                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div id="dropdownMenu" className="absolute z-10 mt-2 hidden w-40 rounded-md bg-white shadow-lg">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Monday</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Tuesday</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Wednesday</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Thursday</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Friday</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Saturday</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sunday</a>
                                        </div>
                                    </div>
                                </div>
                                <button className="font-inter mr-5 h-[41px] w-[77px] rounded-lg bg-sky-800 py-2 text-center font-sans text-base font-bold text-white duration-200 ease-in hover:scale-105 " title="Save changes">Save</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Second Section --> */}
                <div className="mt-4 grid grid-cols-3 gap-[1px]">
                    <div className=" h-[347px] w-[496px] rounded-lg bg-white shadow-lg" id="expandableForm">
                        <div className="item-center mx-3 flex justify-between p-5">
                            <span className="text-normal font-inter font-sans font-bold text-gray-700">Annual Leave Settings (for Regular)</span>
                            <button className="font-inter font-sans text-sm font-normal text-blue-600">Settings</button>
                        </div>
                        <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                            <span className="font-sans text-sm font-normal text-gray-400">Allowable Duration</span>
                            <span className="font-sans text-sm font-bold text-gray-400">One Day</span>
                        </div>
                        <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                            <span className="font-sans text-sm font-normal text-gray-400">Start of Crediting</span>
                            <span className="font-sans text-sm font-bold text-gray-400">Fiscal Year</span>
                        </div>
                        <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                            <span className="font-sans text-sm font-normal text-gray-400">Expiration Policy</span>
                            <span className="font-sans text-sm font-bold text-gray-400">Expires after 1 year</span>
                        </div>
                        <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                            <span className="font-sans text-sm font-normal text-gray-400">1st year Prorated Rule Set-up</span>
                            <span className="font-sans text-sm font-bold text-gray-400">1 day(s) every 1 month(s)</span>
                        </div>
                        <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                            <span className="font-sans text-sm font-normal text-gray-400">Expiration Policy</span>
                            <span className="font-sans text-sm font-bold text-gray-400">Expires after 1 year</span>
                        </div>
                        <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                            <span className="font-sans text-sm font-normal text-gray-400">Approval Process</span>
                            <span className="font-sans text-sm font-bold text-gray-400">Level 1 Approver (Level 1 Head)</span>
                        </div>
                    </div>
                    {/* <!-- End Second Section -->

                    <!-- Third Section --> */}
                    <div className="border-l border-r border-gray-400">
                        <div className="ml-2 h-44 w-[496px] rounded-lg bg-white shadow-lg" id="expandableForm1">
                            <div className="font-inter ml-5 flex pt-5">
                                <span className="font-sans text-base font-bold text-gray-700">Special Leave Settings (for Non-Regular)</span>
                            </div>
                            <div className="font-inter flex justify-end pt-14 text-center font-sans text-base font-normal">
                                <button id="outerSaveBtn1" className="font-inter mr-5 h-[55px] w-[103px] rounded-lg bg-sky-800 font-sans text-base font-bold text-white duration-200 ease-in hover:scale-105">
                                    <span>Add</span>
                                </button>
                            </div>
                        </div>

                        <div className="ml-2 mt-4 h-[303px] w-[496px] rounded-lg bg-white shadow-lg" id="expandableForm">
                            <div className="item-center flex justify-between p-5">
                                <span className="text-normal font-inter ml-3 font-sans font-bold text-gray-700">Special Leave 1</span>
                                <div className="relative inline-block text-left">
                                    <button type="button" className="inline-flex h-8 w-8 justify-center">
                                        <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a2 2 0 100-4 2 2 0 000 4zM12 12a2 2 0 100-4 2 2 0 000 4zM12 18a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                <span className="font-sans text-sm font-normal text-gray-400">Employment Type</span>
                                <span className="font-sans text-sm font-bold text-gray-400">Intern/Part-Time</span>
                            </div>
                            <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                <span className="font-sans text-sm font-normal text-gray-400">Allowable Leaves</span>
                                <span className="font-sans text-sm font-bold text-gray-400">One Day</span>
                            </div>
                            <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                <span className="font-sans text-sm font-normal text-gray-400">Leave Credits</span>
                                <span className="font-sans text-sm font-bold text-gray-400">1 day(s) every 1 month(s)</span>
                            </div>
                            <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                <span className="font-sans text-sm font-normal text-gray-400">Expiration Policy</span>
                                <span className="font-sans text-sm font-bold text-gray-400">None</span>
                            </div>
                            <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                <span className="font-sans text-sm font-normal text-gray-400">Approval Process</span>
                                <span className="font-sans text-sm font-bold text-gray-400">Level 1 Approver (Level 1 Head)</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Third Section -->

                    <!-- Fourth Section --> */}
                    <div className='mx-4'>
                        <div className=" h-44 w-[496px] rounded-lg bg-white shadow-lg">
                            <div className="ml-5 flex pt-5">
                                <span className="font-sans text-base font-bold text-gray-700">Other Leave Sample</span>
                            </div>
                            <div className="font-inter flex justify-end pt-14 text-center font-sans text-base font-normal">
                                <button className="font-inter mr-5 h-[55px] w-[103px] rounded-lg bg-sky-800 font-sans text-base font-bold text-white duration-200 ease-in hover:scale-105">
                                    <span>Add</span>
                                </button>
                            </div>

                            <div className="mt-9 h-[259px] w-[495px] rounded-lg bg-white shadow-lg" id="expandableForm">
                                <div className="item-center flex justify-between p-5">
                                    <span className="text-normal font-inter ml-3 font-sans font-bold text-gray-700">Special Leave 1</span>
                                    <div className="relative inline-block text-left">
                                        <button type="button" className="inline-flex h-8 w-8 justify-center">
                                            <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a2 2 0 100-4 2 2 0 000 4zM12 12a2 2 0 100-4 2 2 0 000 4zM12 18a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                    <span className="font-sans text-sm font-normal text-gray-400">Grant Leave</span>
                                    <span className="font-sans text-sm font-bold text-gray-400">Upon Application</span>
                                </div>
                                <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                    <span className="font-sans text-sm font-normal text-gray-400">Days Granted</span>
                                    <span className="font-sans text-sm font-bold text-gray-400">1 Day</span>
                                </div>
                                <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                    <span className="font-sans text-sm font-normal text-gray-400">Salary Payment Status</span>
                                    <span className="font-sans text-sm font-bold text-gray-400">Unpaid</span>
                                </div>
                                <div className="mx-5 flex items-center justify-between border-b border-gray-300 p-[0.7rem]">
                                    <span className="font-sans text-sm font-normal text-gray-400">Approval Process</span>
                                    <span className="font-sans text-sm font-bold text-gray-400">Level 1 (ja)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Fourth Section --> */}


                    {/* <!-- Borders --> */}
                    <div className="col-start-2 row-start-2 border-l border-r border-gray-400"></div>
                    <div className="col-start-2 row-start-3 border-l border-r border-gray-400"></div>
                    <div className="col-start-2 row-start-4 border-l border-r border-gray-400"></div>
                    <div className="col-start-2 row-start-5 border-l border-r border-gray-400"></div>
                    <div className="col-start-2 row-start-6 border-l border-r border-gray-400"></div>
                    <div className="col-start-2 row-start-7 border-l border-r border-gray-400"></div>
                    {/* <!-- End Borders --> */}
                </div>
            </MainLayout>

        </>
    )
}

export default page
