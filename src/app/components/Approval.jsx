import React from 'react';

const Approval = () => {
    return (
        <>
            <div className="rounded-xl bg-white p-2 shadow-md col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-3 md:col-span-1 md:py-4 md:row-start-4 ">
                <div className="relative">
                    <div className="absolute right-0 top-0"></div>
                    <div className="ml-2 font-sans">
                        <h5 className="lg:text-2xl font-bold text-black md:text-base text-xs">Needs Approval</h5>
                    </div>
                </div>

                <div className="grid grid-cols-5 font-sans font-inter text-xs font-bold text-gray-700 mt-1 ml-2 py-2">
                    <div className="col-span-5">
                        <table className="w-full"> {/* Ensure both thead and tbody are in the same table */}
                            <thead>
                                <tr>
                                    <th className="w-1/5 px-4 py-1 text-center border-b border-gray-700">Name</th>
                                    <th className="w-1/5 px-4 py-1 text-center border-b border-gray-700">Department</th>
                                    <th className="w-1/5 px-4 py-1 text-center border-b border-gray-700">Type</th>
                                    <th className="w-1/5 px-4 py-1 text-center border-b border-gray-700">Request Date</th>
                                    <th className="w-1/5 px-4 py-1 text-center border-b border-gray-700">Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className="col-span-5 overflow-y-auto lg:h-[18vh] md:h-[24vh] h-[35vh]">
                        <table className="w-full table-fixed"> {/* Added table-fixed class for equal width columns */}
                            <tbody className="font-sans text-xs font-normal font-inter">
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-center">John</td>
                                    <td className="px-4 text-center">Finance</td>
                                    <td className="px-4 text-center">Permanent</td>
                                    <td className="px-4 text-center">01/12/2024</td>
                                    <td className="px-4 text-center"><a href="/" className='text-blue-700'>Details</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Approval;
