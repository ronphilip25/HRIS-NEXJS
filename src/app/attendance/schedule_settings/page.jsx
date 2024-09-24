import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import { useNavbar } from '@/context/NavbarContext'

const page = () => {

    const { setPageTitle, setSubTitle } = useNavbar();

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
                <div className="container mx-auto px-4 lg:h-auto md:overflow-x-auto md:h-screen overflow-x-scroll h-screen">
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
                    <div className="grid grid-cols-3 grid-rows-3 mt-4">
                        <div className="rounded-lg shadow-lg w-[496px] bg-white h-44" >
                            <div className="flex text-normal font-sans font-inter ml-4 font-bold pt-5">
                                <span>Allow Overtime / Rest / Holiday / Night Shift
                                    <br />Registration?
                                </span>
                            </div>
                            <div className="flex justify-between text-center font-normal font-sans font-inter text-base pt-8">
                                <div className="ml-5">
                                    <button aria-label="Open settings" className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600"
                                    >Yes</button>
                                    <button aria-label="Open settings" className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600 ml-2"
                                    >No</button>
                                </div>
                                <button
                                    aria-label="Open settings"
                                    className="rounded-lg text-white bg-sky-800 w-[103px] h-[55px] mr-5 font-bold text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                    <span>Save</span>
                                </button>
                            </div>
                            {/* <!-- Form starts hidden and expands when "Yes" button is clicked --> */}
                            <div className="overflow-hidden hidden rounded-lg shadow-lg">
                                <form action="#" method="post" className="p-5 bg-white">
                                    <label id="name" className="block mb-2 text-gray-700 font-bold text-base font-sans font-inter">Select an approver</label>
                                    <div className="flex justify-between items-center">
                                        <label id="name" className="block text-gray-700 font-normal text-base font-sans font-inter">Level Head</label>
                                        <div className="flex items-center mt-[1.5px]">
                                            <input type="checkbox" id="automatic" name="automatic" className="mr-2" />
                                            <label id="automatic" className="font-sans text-sm font-normal">Automatic</label>
                                        </div>
                                    </div>
                                    {/* <!-- end form -->
                                 <!-- dropdown --> */}
                                    <div className="mt-4">
                                        <select id="approver" name="approver" className="w-full border border-gray-400 rounded-md h-10 font-sans text-sm font-normal text-gray-500">
                                            <option value="approver1">Level Head 1</option>
                                            <option value="approver2">Level Head 2</option>
                                            <option value="approver3">Level Head 3</option>
                                        </select>
                                    </div>
                                    {/* <!-- end dropdown --> */}
                                    <div className="flex justify-end mt-9">
                                        <button
                                            aria-label="Open settings"
                                            className="rounded-lg text-white bg-sky-800 w-[103px] h-[55px] font-bold text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                            <span>Save</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- End Second Section -->

                    <!-- Third Section --> */}
                        <div className="border-r border-l border-gray-400">
                            <div className="rounded-lg shadow-lg mx-auto w-[496px] bg-white h-44" id="expandableForm1">
                                <div className="flex text-base font-sans font-inter font-bold ml-5 pt-5">
                                    <span>Edit Time-in and Time-out settings?</span>
                                </div>
                                <div className="flex justify-between text-center font-normal font-sans font-inter text-base pt-14">
                                    <div className="ml-5">
                                        <button aria-label="Open settings" className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600"
                                        >Yes</button>
                                        <button aria-label="Open settings" className="h-[55px] w-[92px] rounded-lg border border-gray-400 hover:border-2 hover:border-blue-600 hover:font-bold hover:text-blue-600 focus:border-2 focus:border-blue-600 focus:font-bold focus:text-blue-600 active:border-blue-600 ml-2"
                                        >No</button>
                                    </div>
                                    <button aria-label="Open settings" id="outerSaveBtn1"
                                        className="rounded-lg text-white bg-sky-800 w-[103px] h-[55px] mr-5 font-bold text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                        <span>Save</span>
                                    </button>
                                </div>
                                {/* <!-- Form starts hidden and expands when "Yes" button is clicked --> */}
                                <div id="formContainer1" className="overflow-hidden hidden rounded-lg shadow-lg">
                                    <form action="#" method="post" className="p-5 bg-white">
                                        <label id="name" className="block mb-2 text-gray-700 font-bold text-base font-sans font-inter">Select an approver</label>
                                        <div className="flex justify-between items-center">
                                            <label id="name" className="block text-gray-700 font-normal text-base font-sans font-inter">Level Head</label>
                                            <div className="flex items-center mt-[1.5px]">
                                                <input type="checkbox" id="automatic" name="automatic" className="mr-2" />
                                                <label id="automatic" className="font-sans text-sm font-normal">Automatic</label>
                                            </div>
                                        </div>
                                        {/* <!-- end form -->
                                    <!-- dropdown --> */}
                                        <div className="mt-4">
                                            <select id="approver1" name="approver" className="w-full border border-gray-400 rounded-md h-10 font-sans text-sm font-normal text-gray-500">
                                                <option value="approver1">Level Head 1</option>
                                                <option value="approver2">Level Head 2</option>
                                                <option value="approver3">Level Head 3</option>
                                            </select>
                                        </div>
                                        {/* <!-- end dropdown --> */}
                                        <div className="flex justify-end mt-9">
                                            <button aria-label="Open settings" id="innerSaveBtn1"
                                                className="rounded-lg text-white bg-sky-800 w-[103px] h-[55px] font-bold text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                                <span>Save</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Third Section --> */}

                        {/* <!-- Fourth Section --> */}
                        <div className="rounded-lg shadow-lg mx-3 w-[496px] bg-white h-44">
                            <div className="flex text-base font-sans font-inter font-bold ml-5 pt-5">
                                <span>Other work schedule settings</span>
                            </div>
                            <div className="flex justify-end text-center font-normal font-sans font-inter text-base pt-14">
                                <button aria-label="Open settings" id="openModal" className="rounded-lg text-white bg-sky-800 w-[103px] h-[55px] mr-5 font-bold text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                    <span>Add</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- End Fourth Section --> */}

                        {/* <!-- Borders --> */}
                        <div className="row-start-2 col-start-2 border-r border-l border-gray-400"></div>
                        <div className="row-start-3 col-start-2 border-r border-l border-gray-400"></div>
                        <div className="row-start-4 col-start-2 border-r border-l border-gray-400"></div>
                        {/* <!-- End Borders --> */}

                        {/* <!-- col-start-3 --> */}
                        <div className="row-start-2 col-start-3 rounded-lg shadow-lg mx-3 bg-white h-[90px] w-[496px] mt-1">
                            <div className="flex items-center justify-between text-gray-700 text-base font-sans font-inter font-bold ml-5 pt-5">
                                <span>Work Schedule 1</span>
                                <div className="text-center font-normal font-sans font-inter text-base">
                                    <button aria-label="Open settings" className="rounded-md text-blue-600 border border-blue-600 w-[110px] h-[36px] mr-5 text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                        <span>Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row-start-2 col-start-3 rounded-lg shadow-lg mx-3 bg-white h-[90px] w-[496px] mt-28">
                            <div className="flex items-center justify-between text-gray-700 text-base font-sans font-inter font-bold ml-5 pt-5">
                                <span>Work Schedule 2</span>
                                <div className="text-center font-normal font-sans font-inter text-base">
                                    <button aria-label="Open settings" className="rounded-md text-blue-600 border border-blue-600 w-[110px] h-[36px] mr-5 text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                        <span>Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row-start-3 col-start-3 rounded-lg shadow-lg mx-3 bg-white h-[90px] w-[496px] mt-4">
                            <div className="flex items-center justify-between text-gray-700 text-base font-sans font-inter font-bold ml-5 pt-5">
                                <span>Work Schedule 3</span>
                                <div className="text-center font-normal font-sans font-inter text-base">
                                    <button aria-label="Open settings" className="rounded-md text-blue-600 border border-blue-600 w-[110px] h-[36px] mr-5 text-base font-sans font-inter hover:scale-105 ease-in duration-200">
                                        <span>Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End col-start-3 --> */}
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default page
