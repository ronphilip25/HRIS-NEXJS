import React from 'react';

const Monthly = () => {
    return (
        <>
            <div className="rounded-xl bg-white p-2 shadow-md col-span-1">
                <div className="relative">
                    <div className="absolute right-0 top-0"></div>
                    <div className="font-inter ml-2 mt-1 font-sans">
                        <h5 className="lg:text-base md:text-base font-bold text-black text-xs">Monthly Tardiness and Absences</h5>
                    </div>
                </div>
                <div className="grid grid-cols-4 font-sans font-inter text-xs font-bold text-gray-700 mt-2">
                    <div className="col-span-4">
                        <table className="w-full table-fixed"> {/* Added table-fixed class for equal width columns */}
                            <thead>
                                <tr>
                                    <th className="lg:px-2 lg:py-2 border-b border-gray-700 text-start w-1/4">Name</th>
                                    <th className="lg:px-2 lg:py-2 border-b border-gray-700 text-justify w-2/5">Department</th>
                                    <th className="lg:px-2 lg:py-2 border-b border-gray-700 text-justify w-1/4">Tardiness</th>
                                    <th className="lg:px-2 lg:py-2 border-b border-gray-700 text-end w-1/4">Absences</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className="col-span-4 overflow-y-auto overflow-x-auto lg:h-[32vh] md:h-[20vh] h-[35vh]">
                        <table className="w-full table-fixed"> {/* Added table-fixed class for equal width columns */}
                            <tbody className="font-sans text-xs font-normal font-inter">
                                <tr>
                                    <td className="lg:py-1 lg:pl-2 text-start break-words lg:w-1/4 w-1/5">Ron Philip Sanchez</td> {/* Added break-words */}
                                    <td className="lg:py-1 break-words lg:w-2/4 w-2/5">Software Development Department</td> {/* Added break-words */}
                                    <td className="lg:py-1 lg:text-center break-words w-1/3 lg:w-1/4">0</td> {/* Added break-words */}
                                    <td className="lg:py-1 lg:text-center break-words w-1/12 lg:w-4/12">0</td> {/* Added break-words */}
                                </tr>
                                <tr>
                                    <td className="lg:py-1 lg:pl-2 text-start break-words lg:w-1/4 w-1/5">Mary Jane Watson</td> {/* Added break-words */}
                                    <td className="lg:py-1 break-words lg:w-2/4 w-2/5">HR Department</td> {/* Added break-words */}
                                    <td className="lg:py-1 lg:text-center break-words w-1/3 lg:w-1/4">0</td> {/* Added break-words */}
                                    <td className="lg:py-1 lg:text-center break-words w-1/12 lg:w-4/12">0</td> {/* Added break-words */}
                                </tr>
                                <tr>
                                    <td className="lg:py-1 lg:pl-2 text-start break-words lg:w-1/4 w-1/5">Peter Parker</td> {/* Added break-words */}
                                    <td className="lg:py-1 break-words lg:w-2/4 w-2/5">Animation Department</td> {/* Added break-words */}
                                    <td className="lg:py-1 lg:text-center break-words w-1/3 lg:w-1/4">0</td> {/* Added break-words */}
                                    <td className="lg:py-1 lg:text-center break-words w-1/12 lg:w-4/12">0</td> {/* Added break-words */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

        </>
    );
}

export default Monthly;
