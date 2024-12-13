"use client";

import { useNavbar } from "../../../context/NavbarContext";
import MainLayout from "../../Layout/MainLayout";
import React from "react";
import { useEffect } from "react";

const page = () => {
  const { setPageTitle, setSubTitle } = useNavbar();

  useEffect(() => {
    setPageTitle("Leaves");
    setSubTitle("Leave Usage History");
  }, [setPageTitle, setSubTitle]);

  return (
    <>
      <MainLayout
        pageTitle="Leave Usage Settings | Next.js"
        description="Welcome to my Next.js app. Learn about the latest trends."
        keywords="Next.js, React, SEO"
      >
        <div className="container mx-auto px-4 h-screen overflow-y-auto w-full">
          <div className=" lg:flex lg:gap-6 gap-3 ">
            {/* Left Column: HR Info */}
            <div className="h-[790px] w-auto rounded-lg bg-white shadow-md mb-6 lg:mb-0 ">
              <h6 className="p-5 mt-3 font-sans text-xl font-bold text-gray-700">
                Human Resource Info System.
              </h6>
              <div className="ml-6 mr-6 border-b border-blue-900"></div>
              <div className="p-5">
                <details>
                  <summary className="list-disc text-gray-700 text-sm font-sans font-bold">
                    Human Resource Info System. (0)
                  </summary>
                  <ul className="list-disc [&>li]:ml-8 text-sm text-gray-700 font-normal">
                    <li>
                      <details className="appearance-none">
                        <summary className="list-none">
                          Human Resource (0)
                        </summary>
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

            {/* Right Column: Table & Search */}
            {/* <div className="w-full tracking-wide lg:h-[790px] min-h-[790px] rounded-lg bg-white shadow-md">
              <div className="p-5 mt-3 flex lg:flex-row items-center justify-between gap-3 lg:gap-6">
                <button
                  id="dropdownBtn"
                  type="button"
                  className="ml-2 w-full lg:w-[264px] inline-flex justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:border-blue-500"
                >
                  2024
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
                </button> */}

                {/* Search Input */}
                {/* <div className="relative mr-2 w-full lg:w-auto">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full lg:w-auto h-auto rounded-md border bg-white border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 256"
                    >
                      <path d="M20.5,6c-7.99037,0 -14.5,6.50964 -14.5,14.5c0,7.99036 6.50963,14.5 14.5,14.5c3.45636,0 6.63371,-1.22096 9.12891,-3.25l9.81055,9.81055c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-9.81055,-9.81055c2.02904,-2.4952 3.25,-5.67255 3.25,-9.12891c0,-7.99036 -6.50963,-14.5 -14.5,-14.5zM20.5,9c6.36905,0 11.5,5.13096 11.5,11.5c0,3.10261 -1.2238,5.90572 -3.20898,7.9707c-0.12237,0.08994 -0.23037,0.19794 -0.32031,0.32031c-2.06499,1.98518 -4.86809,3.20898 -7.9707,3.20898c-6.36905,0 -11.5,-5.13096 -11.5,-11.5c0,-6.36904 5.13095,-11.5 11.5,-11.5z"></path>
                    </svg>
                  </div>
                </div>
              </div> */}

              {/* Table */}
              {/* <div className="p-2 mx-4 overflow-x-auto">
                <table className="w-full table-auto min-w-[600px]">
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
            </div> */}
          </div>

          {/* Pagination */}
          {/* <div className="flex items-center justify-end mt-5 mr-4 lg:mr-12">
            <div className="join max-w-full">
              <button className="join-item btn">«</button>
              <button className="join-item btn">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">8</button>
              <button className="join-item btn">9</button>
              <button className="join-item btn">10</button>
              <button className="join-item btn">»</button>
            </div>
          </div> */}
        </div>
      </MainLayout>
    </>
  );
};

export default page;
