import MainLayout from '../../Layout/MainLayout';
import AttendanceWidget from '../../components/AttendanceWidget';
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <MainLayout pageTitle="Daily">
            <div className='grid grid-cols-4 gap-4 '>
                <AttendanceWidget />
                <div className="col-start-1 rounded-lg bg-white p-2 col-span-3 shadow-md h-[720px]">
                    <div className="flex justify-between items-center mt-3 ml-3">
                        <h5 className="leading-44 text-2xl font-bold text-gray-700">Attendance</h5>
                        <div className="rounded-md py-2 px-2 bg-blue-800 cursor-pointer mr-3">
                            <div className="text-white text-xs px-5 py-1 font-sans font-inter">
                                <button>
                                    Download Excel
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-evenly item-end font-sans font-inter text-gray-700 mt-3 ml-2 py-2">

                        <div className="text-base font-bold">

                        </div>

                        <div className="grid grid-cols-2 grid-rows-4 [&_div:nth-child(even)]:text-right mt-5">
                            <div className="border-b border-gray-200 py-1 mb-3 text-gray-400">Department</div>
                            <div className="border-b border-gray-200 py-1 mb-3 text-gray-500 text-sm font-bold">IT Department</div>
                            <div className="border-b border-gray-200 py-1 mb-3 text-gray-400">Work Schedule</div>
                            <div className="border-b border-gray-200 py-1 mb-3 text-gray-500 text-sm font-bold">Mon, Tue, Wed, Thu, Fri(9:00-18:00)</div>
                            <div className="border-b border-gray-200 py-1 mb-3 text-gray-400">Period</div>
                            <div className="border-b border-gray-200 py-1 mb-3 text-gray-500 text-sm font-bold">01/29/2024 Mon - 02/04/2024 Sun</div>
                            <div className="border-b border-gray-200 py-1 text-gray-400">Cumulative working hours</div>
                            <div className="border-b border-gray-200 py-1 text-gray-500 text-sm font-bold"> - </div>
                        </div>
                    </div>

                    {/* <!-- Thresholdtab -->
        {% include '_components/_attendance[components]/thresholdtab.html' %} */}

                    {/* <!-- Widget 5 --> */}
                    <div className="grid grid-cols-8 font-sans font-inter text-base font-bold text-gray-700 mt-10 ml-1 py-2">
                        <table className="col-span-8 border-separate border-gray-200 border-spacing-y-[0.5rem] my-[-2rem]">
                            <colgroup>
                                <col span="3" className="text-center" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="px-0 py-2 text-left border-b border-gray-300">Date</th>
                                    <th className="px-2 py-2 text-left border-b border-gray-300">Day</th>
                                    <th className="px-3 py-2 border-b border-gray-300 text-center">Time in/ Time-out</th>
                                    <th className="px-3 py-2 border-b border-gray-300 text-center">Break</th>
                                    <th className="px-3 py-2 border-b border-gray-300 text-center">Total working hrs</th>
                                    <th className="px-3 py-2 border-b border-gray-300 text-center">Overtime</th>
                                    <th className="px-3 py-2 border-b border-gray-300 text-center">Notes</th>
                                    <th className="px-3 py-2 border-b border-gray-300 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="font-sans text-xs font-normal font-inter">
                                <tr>
                                    <td></td>
                                    <td className="px-3 py-2"></td>
                                    <td className="px-3 py-2 text-center"></td>
                                    <td className="px-3 py-2 text-center"></td>
                                    <td className="px-3 py-2 text-center"></td>
                                    <td className="px-3 py-2 text-center"></td>
                                    <td className="px-3 py-2 text-center"></td>
                                    <td className="text-blue-500 text-center">
                                        <a href="">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!-- Widget 6 --> */}
                <div className=" col-start-4 row-start-1 row-span-2 rounded-lg bg-white p-4 shadow-md ml-4">
                    <div className="relative">
                        <div className="font-inter ml-2 mt-2 font-sans">
                            <h5 className="leading-44 text-2xl font-bold text-black">Employees</h5>
                            <div className="grid grid-rows-12">
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex relative">
                                    <Image
                                        src="/assets/employee1.png"
                                        width={48}
                                        height={48}
                                        className="w-[48px] h-[48px] rounded-full mt-3"
                                    />
                                    <div className=" absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                    <div className="py-3 w-48 h-90">
                                        <div className="text-sm font-bold font-sans font-inter text-center">
                                            Patricia Kim Rosauro
                                            <div
                                                className="text-sm font-normal font-sans font-inter text-start ml-7"
                                            >
                                                IT Department
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </MainLayout>
    )
}

export default page
