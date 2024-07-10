import React from 'react';

const Monthly = () => {
    return (
        <>
            <div className="rounded-xl bg-white p-2 shadow-md col-span-1">
                <div className="relative">
                    <div className="absolute right-0 top-0"></div>
                    <div className="font-inter ml-2 mt-1 font-sans">
                        <h5 className="text-base font-bold text-black">Monthly Tardiness and Absences</h5>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-3 font-sans font-inter text-xs font-bold text-gray-700 mt-3 ml-2 py-2">
                    <table className="col-span-4 border-separate border-spacing-y-[0.5rem] my-[-2rem]">
                        <thead>
                            <tr>
                                <th className="px-0 py-2 border-b border-gray-700">Name</th>
                                <th className="px-3 py-2 border-b border-gray-700">Department</th>
                                <th className="px-3 py-2 border-b border-gray-700">Tardiness</th>
                                <th className="px-3 py-2 border-b border-gray-700">Absences</th>
                            </tr>
                        </thead>
                        <tbody className="font-sans text-xs font-normal font-inter">
                            <tr>
                                <td className="px-0 py-2 text-center"></td>
                                <td className="px-4 text-center"></td>
                                <td className="px-4 text-center"></td>
                                <td className="px-4 text-center"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default Monthly;
