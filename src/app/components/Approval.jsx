import React from 'react';

const Approval = () => {

    const data = [
        { name: 'John Doe', department: 'IT Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
        { name: 'John Smith', department: 'HR Department', type: 'Late', requestDate: '2023-05-01' },
    ];

    return (
        <>
            <div className="rounded-xl bg-white p-2 shadow-md col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-3 md:col-span-1 md:py-4 md:row-start-4 lg:max-[1440px]:h-[30vh]">
                <div className="relative">
                    <div className="absolute right-0 top-0"></div>
                    <div className="ml-2 font-sans">
                        <h5 className="lg:text-2xl font-bold text-black md:text-base text-xs lg:max-[1440px]:text-base">Needs Approval</h5>
                    </div>
                </div>
                <div className="grid grid-cols-5 font-sans font-inter font-bold lg:text-base text-xs lg:max-[1440px]:text-xs text-gray-700 mt-1 py-2">
                    <div className="col-span-5">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr>
                                    <th className="w-1/5 text-center border-b border-gray-700">Name</th>
                                    <th className="w-1/5 text-center border-b border-gray-700">Department</th>
                                    <th className="w-1/5 text-center border-b border-gray-700">Type</th>
                                    <th className="w-1/5 text-center border-b border-gray-700">Request Date</th>
                                    <th className="w-1/5 text-center border-b border-gray-700">Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="col-span-5 overflow-y-auto lg:h-[18vh] md:h-[24vh] h-[35vh]">
                        <table className="mx-auto w-full table-fixed">
                            <tbody className="font-sans text-xs font-normal font-inter">
                                {data.length > 0 && data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-3 px-4 text-center">{item.name || 'N/A'}</td>
                                        <td className="py-3 px-4 text-center">{item.department || 'N/A'}</td>
                                        <td className="py-3 px-4 text-center">{item.type || 'N/A'}</td>
                                        <td className="py-3 px-4 text-center">{item.requestDate || 'N/A'}</td>
                                        <td className="py-3 px-4 text-center">
                                            <a href="/not-found" className="text-blue-700" aria-label={`View details for ${item.name}`}>Details</a>
                                        </td>
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

export default Approval;

