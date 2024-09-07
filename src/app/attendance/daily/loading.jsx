import React from 'react'
import Image from 'next/image'


const loading = () => {
    return (
        <>
            <div className='lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-3 md:gap-4 grid gap-4'>
                <div className="rounded-lg shadow-md border border-gray-400 animate-pulse w-full lg:h-[119px] p-2">
                    <h2 className="text-md ml-2 mt-3 font-normal animate-pulse h-4 w-12 rounded bg-gray-400 "></h2>
                    <div className="relative font-inter font-sans">
                        <div className="rounded-lg border border-gray-600 w-full mt-4">
                            <div
                                className="font-sans font-inter lg:text-base font-bold text-gray-700 lg:py-[10px] md:text-xs md:py-[1px] py-[8px] md:p-2 flex justify-center mr-4"
                            >
                                <div className="mr-4 lg:block md:hidden">
                                    <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-5 w-6 mt-1 ml-2'></div>
                                </div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-5 w-full mt-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="rounded-lg shadow-md border border-gray-400 animate-pulse w-full lg:h-[119px] p-2">
                        <h2 className="text-md ml-2 mt-3 font-normal animate-pulse h-4 w-20 rounded bg-gray-400 "></h2>
                        <div className="font-inter font-sans">
                            <div className="rounded-lg border border-gray-600 w-full mt-4">
                                <div
                                    className="flex justify-start font-sans font-inter lg:text-base font-bold text-gray-700 lg:py-[10px] md:text-xs md:py-[1px] py-[8px] md:p-2 mr-4"
                                >
                                    <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-5 w-32 mt-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="rounded-lg shadow-md border border-gray-400 animate-pulse w-full lg:h-[119px] p-2">
                        <h2 className="text-md ml-2 mt-3 font-normal animate-pulse h-4 w-20 rounded bg-gray-400 "></h2>
                        <div className="font-inter font-sans">
                            <div className="rounded-lg border border-gray-600 w-full mt-4">
                                <div
                                    className="flex justify-start font-sans font-inter lg:text-base font-bold text-gray-700 lg:py-[10px] md:text-xs md:py-[1px] py-[8px] md:p-2 mr-4"
                                >
                                    <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-5 w-32 mt-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-start-1 lg:col-span-3 md:col-span-2'>
                    <div className="rounded-lg border border-gray-400 animate-pulse p-2 lg:h-[700px] md:h-[74vh] w-auto shadow-md">
                        <div className="flex justify-between items-center mt-3 ml-3">
                            <h5 className="leading-44 text-2xl font-bold text-gray-700 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-6 w-36"></h5>
                            <div className="rounded-md py-2 px-2 animate-pulse border border-blue-400 w-36 cursor-pointer mr-3">
                                <div className="text-white text-xs px-5 py-1 font-sans font-inter">
                                    <button>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-evenly item-end font-sans font-inter text-gray-700 mt-3 ml-2 py-2">
                            <div className="text-base font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 ml-1">
                            </div>
                            <div className="lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:[&_div:nth-child(even)]:text-right lg:mt-5 lg:p-4">
                                <div className="py-1 mb-3 text-gray-400 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 mt-3"></div>
                                <div className="py-1 mb-3 text-gray-500 text-sm font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 ml-[450px] mt-3"></div>
                                <div className="py-1 mb-3 text-gray-400 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 mt-3"></div>
                                <div className="py-1 mb-3 text-gray-500 text-sm font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 ml-[450px] mt-3"></div>
                                <div className="py-1 mb-3 text-gray-400 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 mt-3"></div>
                                <div className="py-1 mb-3 text-gray-500 text-sm font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 ml-[450px] mt-3"></div>
                                <div className="py-1 text-gray-400 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-4 w-24 mt-3"></div>
                                <div className="py-1 text-gray-500 text-sm font-bold"> - </div>
                            </div>
                        </div>

                        {/* <!-- Widget 5 --> */}
                        <div className='mt-10 ml-6'>
                            <div className="grid grid-cols-8 gap-3 font-sans font-inter text-xs font-bold text-gray-700 mt-3 ml-2 py-2">
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                                <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-16 h-5'></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Widget 6 --> */}
                <div className='lg:col-start-4 lg:row-start-1 md:row-start-2 md:col-start-3 md:row-span-2'>
                    <div className="rounded-lg p-4 shadow-md border border-gray-400 animate-pulse">
                        <div className="font-inter ml-2 mt-2 font-sans">
                            <h5 className="leading-44 text-2xl font-bold text-black bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded w-32 h-6"></h5>
                        </div>
                        <div className='mt-6 lg:h-[77vh] md:h-[65vh] h-[34vh] w-auto overflow-y-auto'>
                            <table className="min-w-full table-fixed">
                                <thead>
                                    <tr>
                                        <th className="w-1/6"></th>
                                        <th className="text-left bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-5"></th>
                                        <th className="text-left bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded h-5"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default loading
