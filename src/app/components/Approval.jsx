import React from 'react';

const Approval = () => {
    return (
        <>
            <div className="rounded-xl bg-white p-2 shadow-md col-span-2">
                <div className="relative">
                    <div className="absolute right-0 top-0"></div>
                    <div className="ml-2 font-sans">
                        <h5 className="text-2xl font-bold text-gray-600">Needs Approval</h5>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-3 font-sans font-inter text-base font-bold text-gray-700 mt-2 ml-2 py-1">
                    <table className="col-span-5 border-separate border-spacing-y-[0.5rem] my-[-2rem]">
                        <thead>
                            <tr>
                                <th className="px-0 py-1 text-left border-b border-gray-700">Name</th>
                                <th className="px-3 py-1 text-center border-b border-gray-700">Department</th>
                                <th className="px-3 py-1 text-center border-b border-gray-700">Type</th>
                                <th className="px-3 py-1 text-center border-b border-gray-700">Request Date</th>
                                <th className="px-3 py-1 text-center border-b border-gray-700">Action</th>
                            </tr>
                        </thead>
                        <tbody className="font-sans text-xs font-normal font-inter">
                            <tr>
                                <td className="px-0 py-2 text-left"></td>
                                <td className="px-3 py-2 text-center"></td>
                                <td className="px-3 py-2 text-center"></td>
                                <td className="px-3 py-2 text-center"></td>
                                <td className="text-blue-500 text-center"><a href="#">Details</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Approval;
