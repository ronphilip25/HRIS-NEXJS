import React from 'react';

const Monthly = () => {

    // Dummy data
    const data = [
        { name: 'John Doe', department: 'IT Department', tardiness: 10, absent: 5 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
        { name: 'Jane Smith', department: 'HR Department', tardiness: 8, absent: 3 },
    ];

    return (
        <>
            <div className="rounded-xl bg-white p-2 shadow-md col-span-1 lg:max-[1440px]:h-auto h-auto md:row-start-4 lg:row-start-2 lg:col-start-3 ">
                <div className="relative">
                    <div className="absolute right-0 top-0"></div>
                    <div className="font-inter ml-2 mt-1 font-sans">
                        <h5 className="lg:text-base md:text-base font-bold text-black text-xs lg:max-[1440px]:text-base">Monthly Tardiness and Absences</h5>
                    </div>
                </div>
                <div className="grid grid-cols-4 font-sans font-inter text-xs font-bold text-gray-700 mt-2 ">
                    <div className="col-span-4">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr>
                                    <th className="lg:px-2 lg:max-[1440px]:text-xs lg:max-[1440px]:px-1 lg:py-2 border-b border-gray-700 text-start lg:w-1/4 w-1/4">Name</th>
                                    <th className="lg:px-2 lg:max-[1440px]:text-xs lg:max-[1440px]:px-1 lg:py-2 border-b border-gray-700 text-start lg:w-2/4 w-2/4">Department</th>
                                    <th className="lg:px-2 lg:max-[1440px]:text-xs lg:max-[1440px]:px-1 lg:py-2 border-b border-gray-700 text-center lg:w-1/4 w-1/4">Tardiness</th>
                                    <th className="lg:px-2 lg:max-[1440px]:text-xs lg:max-[1440px]:px-1 lg:py-2 border-b border-gray-700 text-end lg:w-1/4 w-1/4">Absences</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="col-span-4 overflow-y-auto overflow-x-auto lg:max-[1440px]:h-[30vh] lg:h-[32vh] md:h-[19vh] h-[35vh] md:max-[768px]:h-[16vh]">
                        <table className="w-full table-fixed">
                            <tbody className="font-sans text-xs font-normal font-inter">
                                {data.length > 0 && data.map((data, index) => (
                                    <tr key={index}>
                                        <td className="py-3 lg:pl-2 text-start break-words lg:w-1/4 w-1/4">{data.name}</td>
                                        <td className="py-3 lg:px-3 break-words lg:w-2/4 w-2/4">{data.department}</td>
                                        <td className="py-3 text-center break-words lg:w-1/4 w-1/4">{data.tardiness}</td>
                                        <td className="py-3 text-center break-words lg:w-1/4 w-1/4">{data.absent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Monthly;
