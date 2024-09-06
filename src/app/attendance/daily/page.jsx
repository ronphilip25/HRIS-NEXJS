import MainLayout from '../../Layout/MainLayout';
import AttendanceWidget from '../../components/AttendanceWidget';
import Image from 'next/image'
import React from 'react'

const page = () => {

    const tableData = [
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },
        { date: "Placeholder Date", day: "Placeholder Day", time: "Placeholder Time", break: "Placeholder Break", totalHours: "Placeholder Total Hrs", overtime: "Placeholder Overtime", notes: "Placeholder Notes" },

    ];

    return (
        <MainLayout
            pageTitle="Daily | Next.js"
            description="Welcome to my Next.js app. Learn about the latest trends."
            keywords="Human Resource Info System, Vercel, Nextjs, React"
        >
            <div className='lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-3 md:gap-4 grid gap-4'>
                <AttendanceWidget />
                <div className='lg:col-start-1 lg:col-span-3 md:col-span-2'>
                    <div className="rounded-lg bg-white p-2 lg:h-[700px] md:h-[74vh] w-auto shadow-md">
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
                                Sanchez Ron Philip P
                            </div>

                            <div className="lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:[&_div:nth-child(even)]:text-right lg:mt-5 lg:p-4 ">
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

                        {/* <!-- Widget 5 --> */}
                        <div className='overflow-x-auto'>
                            <div className="lg:grid lg:grid-cols-8 grid grid-cols-8 font-sans text-base font-bold text-gray-700 lg:ml-1 lg:py-2 lg:p-4">
                                <div className="col-span-8 border-gray-200 ">
                                    <table className="w-full table-fixed">
                                        <colgroup>
                                            <col className='w-1/8' />
                                            <col className='w-1/8' />
                                            <col className='w-1/8' />
                                            <col className='w-1/8' />
                                            <col className='w-1/8' />
                                            <col className='w-1/8' />
                                            <col className='w-1/8' />
                                            <col className='w-1/8' />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-xs lg:px-0 md:text-xs lg:pl-3 md:pr-9 pr-9 lg:py-2 lg:text-left border-b border-gray-300">
                                                    Date
                                                </th>
                                                <th scope="col" className="text-xs lg:px-2 md:text-xs lg:py-2 md:pr-9 pr-9 lg:text-left border-b border-gray-300">
                                                    Day
                                                </th>
                                                <th scope="col" className="text-xs lg:px-3 md:text-xs lg:py-2 border-b border-gray-300 lg:text-center">
                                                    Time in/ Time-out
                                                </th>
                                                <th scope="col" className="text-xs lg:px-3 md:text-xs lg:py-2 border-b border-gray-300 lg:text-center">
                                                    Break
                                                </th>
                                                <th scope="col" className="text-xs lg:px-3 md:text-xs lg:py-2 border-b border-gray-300 lg:text-center">
                                                    Total working hrs
                                                </th>
                                                <th scope="col" className="text-xs lg:px-3 md:text-xs lg:py-2 border-b border-gray-300 lg:text-center">
                                                    Overtime
                                                </th>
                                                <th scope="col" className="text-xs lg:px-3 md:text-xs lg:py-2 border-b border-gray-300 lg:text-center">
                                                    Notes
                                                </th>
                                                <th scope="col" className="text-xs lg:px-3 md:text-xs lg:py-2 border-b border-gray-300 lg:text-center">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <div className="col-span-8 overflow-x-auto  h-[32vh] lg:h-[30vh] md:h-[10vh]">
                                    <table className="w-full table-fixed">
                                        <tbody className="font-sans text-xs font-normal font-inter">
                                            {tableData.map((row, index) => (
                                                <tr key={index}>
                                                    <td className="px-2 py-2">{row.date}</td>
                                                    <td className="px-2 py-2">{row.day}</td>
                                                    <td className="px-2 py-2 text-center">{row.time}</td>
                                                    <td className="px-2 py-2 text-center">{row.break}</td>
                                                    <td className="px-2 py-2 text-center">{row.totalHours}</td>
                                                    <td className="px-2 py-2 text-center">{row.overtime}</td>
                                                    <td className="px-2 py-2 text-center">{row.notes}</td>
                                                    <td className="text-blue-500 text-center">
                                                        <a href="#">Edit</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                {/* <!-- Widget 6 --> */}
                <div className='lg:col-start-4 lg:row-start-1 md:row-start-2 md:col-start-3 md:row-span-2'>
                    <div className="rounded-lg bg-white p-4 shadow-md ">
                        <div className="font-inter ml-2 mt-2 font-sans ">
                            <h5 className="leading-44 text-2xl font-bold text-black">Employees</h5>
                        </div>
                        <div className='grid grid-cols-1 lg:h-[78.2vh] md:h-[65vh] h-[34vh] w-auto overflow-y-auto'>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex relative">
                                <Image
                                    src="/assets/employee1.png"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                    className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                />
                                <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                <div className="py-3 w-48 h-90 mt-1">
                                    <div className="text-sm font-bold font-sans font-inter text-center">
                                        Patricia Kim Rosauro
                                        <div className="text-sm font-normal font-sans font-inter text-start ml-7">
                                            IT Department
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
