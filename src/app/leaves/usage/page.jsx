import React from 'react'
import MainLayout from '../../Layout/MainLayout'

const page = () => {
    return (
        <>

            <MainLayout>
                <div className="flex-col-2 flex gap-6">
                    <div className="h-[822px] w-[378px] rounded-lg bg-white shadow-md">
                        <h6 className="p-5 mt-3 font-sans text-xl font-bold text-gray-700">
                            Geopro Global Solutions Inc.
                        </h6>
                        <div className="ml-6 mr-6 border-b border-blue-900"></div>
                        <div className="p-5">
                            <details>
                                <summary className="list-disc text-gray-700 text-sm font-sans font-bold">
                                    Geopro Global Solutions Inc. (0)
                                </summary>
                                <ul className="list-disc [&>li]:ml-8 text-sm text-gray-700 font-normal">
                                    <li>
                                        <details className="appearance-none">
                                            <summary className="list-none">Human Resource (0)</summary>
                                            <ul className="list-disc [&>li]:ml-4">
                                                <li>Admin Department (0)</li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>Marketing Department (4)</li>
                                    <li>IT Department (2)</li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className="w-[1182px] h-[822px] rounded-lg bg-white shadow-md">
                        <div className="p-5 mt-3 flex items-center justify-between">
                            <button
                                id="dropdownBtn"
                                type="button"
                                className="ml-2 inline-flex h-[34px] w-[264px] justify-between rounded-md border border-gray-300 bg-white px-4 p-2 text-sm font-medium text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                2024
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="-mr-1 ml-2 h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div
                                id="dropdownContent"
                                className="dropdown absolute right-0 mt-2 hidden w-[264px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                            >
                                <ul className="list-none py-1">
                                    <li>
                                        <a
                                            href="#"
                                            className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >2024</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative mr-2">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-[264px] h-[34px] rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        className="h-6 w-6"
                                        viewBox="0,0,256,256"
                                    >
                                        <g
                                            fillOpacity="0.27843"
                                            fill="#000000"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth="1"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit="10"
                                            strokeDasharray=""
                                            strokeDashoffset="0"
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"

                                        >
                                            <g transform="scale(5.33333,5.33333)">
                                                <path
                                                    d="M20.5,6c-7.99037,0 -14.5,6.50964 -14.5,14.5c0,7.99036 6.50963,14.5 14.5,14.5c3.45636,0 6.63371,-1.22096 9.12891,-3.25l9.81055,9.81055c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-9.81055,-9.81055c2.02904,-2.4952 3.25,-5.67255 3.25,-9.12891c0,-7.99036 -6.50963,-14.5 -14.5,-14.5zM20.5,9c6.36905,0 11.5,5.13096 11.5,11.5c0,3.10261 -1.2238,5.90572 -3.20898,7.9707c-0.12237,0.08994 -0.23037,0.19794 -0.32031,0.32031c-2.06499,1.98518 -4.86809,3.20898 -7.9707,3.20898c-6.36905,0 -11.5,-5.13096 -11.5,-11.5c0,-6.36904 5.13095,-11.5 11.5,-11.5z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mr-4 ml-4">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-500">
                                        <th className="text-center text-sm font-sans font-bold text-gray-500">
                                            Name
                                        </th>
                                        <th className="text-center text-sm font-sans font-bold text-gray-500">
                                            Status
                                        </th>
                                        <th className="text-center text-sm font-sans font-bold text-gray-500">
                                            Department Title
                                        </th>
                                        <th className="text-center text-sm font-sans font-bold text-gray-500">
                                            Type
                                        </th>
                                        <th className="text-center text-sm font-sans font-bold text-gray-500">
                                            Credit Balance
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                    </div>
                </div>


                <div className=" flex items-center justify-end mt-5 mr-12">
                    {/* <!-- pagination --> */}
                    <div>
                        <div className="inline-flex gap-2 shadow-sm" aria-label="Pagination">
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-lg bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
                            <a
                                href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >1</a>
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >2</a>
                            <a
                                href="#"
                                className="relative hidden items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >3</a>
                            <span
                                className="relative inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                            >...</span>
                            <a
                                href="#"
                                className="relative hidden items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >8</a>
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >9</a>
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >10</a>
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-lg rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </MainLayout>

        </>
    )
}

export default page
