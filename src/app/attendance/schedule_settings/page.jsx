'use client'

import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import { useNavbar } from '@/context/NavbarContext';
import { useEffect, useState } from 'react';
import Dropdown from '../schedule_settings/components/dropdown';
import WorkSched from './components/worksched';
import SaveBtn from '../schedule_settings/components/savebtn';

const page = () => {

    const { setPageTitle, setSubTitle } = useNavbar();
    const [isFormVisible1, setIsFormVisible1] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

    const [isFormVisible2, setIsFormVisible2] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const handleYesClick1 = () => {
        setIsFormVisible1(true);
        setIsDropdownOpen1(true);
    };
    const handleNoClick1 = () => {
        setIsFormVisible1(false);
        setIsDropdownOpen1(false);
    };

    const handleYesClick2 = () => {
        setIsFormVisible2(true);
        setIsDropdownOpen2(true);
    };
    const handleNoClick2 = () => {
        setIsFormVisible2(false);
        setIsDropdownOpen2(false);
    };
    useEffect(() => {
        setPageTitle("Attendance");
        setSubTitle("Schedule Settings");
    }, [setPageTitle, setSubTitle]);

    return (
        <>
            <MainLayout
                pageTitle="Schedule Settings | Next.js"
                description="Welcome to my Next.js app. Learn about the latest trends."
                keywords="Next.js, React, SEO"
            >
                <div className="container mx-auto px-4 lg:h-auto md:h-screen h-screen">
                    <div className="flex flex-col rounded-xl shadow-lg bg-white w-auto h-[106px] py-7 px-8">
                        <div className="text-normal font-bold font-sans font-inter text-blue-500 relative right-5 bottom-3">
                            Note:
                        </div>
                        <div>
                            <ul className="list-disc text-sm text-blue-500 font-sans font-inter font-normal">
                                <li><span>Employees must select “Overtime / Rest / Holiday / Night Shift” in Submit Work Schedule. In order to include the relevant work in salary.</span>
                                </li>
                                <li><span>If employees apply for “Overtime / Rest / Holiday / Night Shift” through a different work schedule, it will not be reflected in employee salary.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- End First Section -->

                <!-- Second Section --> */}
                    <div className="grid grid-cols-3 grid-rows-1 mt-4">
                        <div className="rounded-lg shadow-lg w-[496px] bg-white h-44">
                            <div className="flex text-normal font-sans font-bold text-black ml-4 pt-5">
                                <span>Allow Overtime / Rest / Holiday / Night Shift Registration?</span>
                            </div>
                            <div className="flex justify-between text-center font-normal font-sans text-base pt-14">
                                <div className="ml-5">
                                    <button
                                        aria-label="Allow registration"
                                        className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600"
                                        onClick={handleYesClick1}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        aria-label="Disallow registration"
                                        className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600 ml-2"
                                        onClick={handleNoClick1}
                                    >
                                        No
                                    </button>
                                </div>
                                {!isDropdownOpen1 && (
                                    <button
                                        aria-label="Save settings"
                                        className="rounded-lg text-white bg-sky-800 w-[103px] h-[55px] mr-5 font-bold text-base font-sans hover:scale-105 ease-in duration-200"
                                    >
                                        <span>Save</span>
                                    </button>
                                )}
                            </div>

                            {/* Form starts hidden and expands when "Yes" button is clicked */}
                            {isFormVisible1 && (
                                <div className=" rounded-lg shadow-lg mt-4">
                                    <form action="#" method="post" className="p-5 bg-white">
                                        <label htmlFor="approver" className="block mb-2 text-gray-700 font-bold text-base font-sans">Select an approver</label>
                                        <div className="flex justify-between items-center">
                                            <label className="block text-gray-700 font-normal text-base font-sans">Level Head</label>
                                            <div className="flex items-center mt-[1.5px]">
                                                <input type="checkbox" id="automatic" name="automatic" className="mr-2" />
                                                <label htmlFor="automatic" className="font-sans text-sm font-normal">Automatic</label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <Dropdown />
                                        </div>
                                        <div className="flex justify-end mt-9">
                                            <SaveBtn />
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                        {/* <!-- End Second Section -->

                    <!-- Third Section --> */}
                        <div className="border-r border-l border-gray-400">
                            <div className="rounded-lg shadow-lg w-[496px] bg-white h-44">
                                <div className="flex text-normal font-sans text-black font-bold ml-4 pt-5">
                                    <span>Edit Time-in and Time-out settings?</span>
                                </div>
                                <div className="flex justify-between text-center font-normal font-sans text-base pt-14">
                                    <div className="ml-5">
                                        <button
                                            aria-label="Allow registration"
                                            className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600"
                                            onClick={handleYesClick2}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            aria-label="Disallow registration"
                                            className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600 ml-2"
                                            onClick={handleNoClick2}
                                        >
                                            No
                                        </button>
                                    </div>
                                    {!isDropdownOpen2 && (
                                        <SaveBtn />
                                    )}
                                </div>

                                {/* Form starts hidden and expands when "Yes" button is clicked */}
                                {isFormVisible2 && (
                                    <div className="overflow-hidden rounded-lg shadow-lg mt-4">
                                        <form action="#" method="post" className="p-5 bg-white">
                                            <label htmlFor="approver1" className="block mb-2 text-gray-700 font-bold text-base font-sans">Select an approver</label>
                                            <div className="flex justify-between items-center">
                                                <label className="block text-gray-700 font-normal text-base font-sans">Level Head</label>
                                                <div className="flex items-center mt-[1.5px]">
                                                    <input type="checkbox" id="automatic" name="automatic" className="mr-2" />
                                                    <label htmlFor="automatic" className="font-sans text-sm font-normal">Automatic</label>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Dropdown />
                                            </div>
                                            <div className="flex justify-end  mt-9">
                                                <SaveBtn />
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <!-- End Third Section --> */}

                        {/* <!-- Fourth Section --> */}
                        <div className=" row-start-1 col-start-3 rounded-lg shadow-lg mx-3 w-[496px] bg-white h-44">
                            <div className="flex text-base font-sans font-inter text-black font-bold ml-5 pt-5">
                                <span>Other work schedule settings</span>
                            </div>
                            <div className="flex justify-end text-center font-normal font-sans font-inter text-base pt-14">
                                <button aria-label="Open settings" id="openModal" className="rounded-lg text-white bg-sky-800 w-[103px] h-[55px] mr-5 font-bold text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                    <span>Add</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- End Fourth Section --> */}
                        <WorkSched />
                        {/* <!-- Borders --> */}

                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default page
