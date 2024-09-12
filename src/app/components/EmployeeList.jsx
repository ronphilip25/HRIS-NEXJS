import React from 'react'
import Image from 'next/image'

const EmployeeList = () => {
    return (
        <>
            <div className='lg:col-start-4 lg:row-start-1 md:row-start-2 md:col-start-3 md:row-span-2 rounded-lg bg-white lg:max-[1024px]:col-start-3 lg:max-[1024px]:row-start-2 lg:p-4 p-2 pt-3 shadow-md lg:row-span-2 overflow-x-auto overflow-y-auto lg:max-[1440px]:w-4/5 lg:max-[1440px]:h-auto lg:max-[1024px]:h-auto  lg:h-full md:h-auto h-[35vh]'>
                <div className="font-inter ml-2 mt-1 font-sans">
                    <h5 className="text-2xl font-bold text-black">Employees</h5>
                </div>
                <div className='mt-3 lg:max-[1024px]:h-[50vh] lg:h-[65vh] md:h-[63.5vh] h-[34vh] w-auto overflow-y-auto'>
                    <table className="min-w-full table-fixed">
                        <thead>
                            <tr>
                                <th className="w-1/6"></th>
                                <th className="text-left">Name</th>
                                <th className="text-left">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(15).fill(0).map((_, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-3">
                                        <div className="relative inline-flex">
                                            <Image
                                                src="/assets/employee1.png"
                                                alt="logo"
                                                width={48}
                                                height={48}
                                                className="w-[48px] h-[48px] rounded-full mt-3 border border-green-200"
                                            />
                                            <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="text-sm font-bold font-sans font-inter">John Doe</div>
                                    </td>
                                    <td className="py-3">
                                        <div className="text-sm font-normal font-sans font-inter">IT Department</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeList
