'use client'

import React, { useEffect, useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import { useNavbar } from '@/context/NavbarContext';
import Dropdown from '../schedule_settings/components/dropdown';
import WorkSched from './components/worksched';
import SaveBtn from '../schedule_settings/components/savebtn';
import AddBtn from '../schedule_settings/components/addbtn';
import Checkbox from '../schedule_settings/components/checkbox';

const NoteSection = () => (
    <div className="flex flex-col rounded-xl shadow-lg bg-white w-auto h-[106px] py-7 px-8">
        <div className="text-normal font-bold font-sans font-inter text-blue-500 relative right-5 bottom-3">
            Note:
        </div>
        <ul className="list-disc text-sm text-blue-500 font-sans font-inter font-normal">
            <li>Employees must select “Overtime / Rest / Holiday / Night Shift” in Submit Work Schedule to include the relevant work in salary.</li>
            <li>If employees apply for “Overtime / Rest / Holiday / Night Shift” through a different work schedule, it will not be reflected in employee salary.</li>
        </ul>
    </div>
);

const ActionSection = ({ title, isFormVisible, setIsFormVisible, isDropdownOpen, setIsDropdownOpen }) => (
    <div className="rounded-lg shadow-lg w-[496px] bg-white h-44">
        <div className="flex text-normal font-sans font-bold text-black ml-4 pt-5">
            <span>{title}</span>
        </div>
        <div className="flex justify-between text-center font-normal font-sans text-base pt-14">
            <div className="ml-5">
                <button
                    aria-label="Allow registration"
                    className="action-button h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600"
                    onClick={() => {
                        setIsFormVisible(true);
                        setIsDropdownOpen(true);
                    }}
                >
                    Yes
                </button>
                <button
                    aria-label="Disallow registration"
                    className="action-button ml-2 h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600"
                    onClick={() => {
                        setIsFormVisible(false);
                        setIsDropdownOpen(false);
                    }}
                >
                    No
                </button>
            </div>
            {!isDropdownOpen && (
                <SaveBtn />
            )}
        </div>

        {isFormVisible && <FormSection />}
    </div>
);

const FormSection = () => (
    <div className="rounded-lg shadow-lg mt-4">
        <form action="#" method="post" className="p-5 bg-white rounded-lg">
            <label htmlFor="approver" className="block mb-2 text-gray-700 font-bold text-base font-sans">Select an approver</label>
            <div className="flex justify-between items-center">
                <label className="block text-gray-700 font-normal text-base font-sans">Level Head</label>
                <div className="flex items-center mt-[1.5px]">
                    <Checkbox />
                    <label htmlFor="automatic" className="font-sans text-sm font-normal text-black">Automatic</label>
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
);

const Page = () => {
    const { setPageTitle, setSubTitle } = useNavbar();
    const [isFormVisible1, setIsFormVisible1] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isFormVisible2, setIsFormVisible2] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    useEffect(() => {
        setPageTitle("Attendance");
        setSubTitle("Schedule Settings");
    }, [setPageTitle, setSubTitle]);

    return (
        <MainLayout
            pageTitle="Schedule Settings | Next.js"
            description="Welcome to my Next.js app. Learn about the latest trends."
            keywords="Next.js, React, SEO"
        >
            <div className="container mx-auto px-4 lg:h-auto md:h-screen h-screen">
                <NoteSection />
                <div className="grid grid-cols-3 grid-rows-1 mt-4 ">
                    <div className='row-start-1 col-start-1'>
                        <ActionSection
                            title="Allow Overtime / Rest / Holiday / Night Shift Registration?"
                            isFormVisible={isFormVisible1}
                            setIsFormVisible={setIsFormVisible1}
                            isDropdownOpen={isDropdownOpen1}
                            setIsDropdownOpen={setIsDropdownOpen1}
                        />
                    </div>
                    <div className='row-start-1 col-start-2 border-l border-gray-300 border-r flex'>
                        <ActionSection
                            title="Edit Time-in and Time-out settings?"
                            isFormVisible={isFormVisible2}
                            setIsFormVisible={setIsFormVisible2}
                            isDropdownOpen={isDropdownOpen2}
                            setIsDropdownOpen={setIsDropdownOpen2}
                        />
                    </div>
                    <div className="row-start-1 col-start-3 rounded-lg shadow-lg w-[496px] bg-white h-44 ">
                        <div className="flex text-base font-sans font-inter text-black font-bold ml-5 pt-5">
                            <span>Other work schedule settings</span>
                        </div>
                        <div className="flex justify-end text-center font-normal font-sans font-inter text-base pt-14">
                            <AddBtn />
                        </div>
                    </div>
                    <WorkSched />
                </div>
            </div>
        </MainLayout>
    );
};

export default Page;
