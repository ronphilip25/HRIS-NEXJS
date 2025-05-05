"use client";

import { useNavbar } from "../../../context/NavbarContext";
import MainLayout from "../../Layout/MainLayout";
import React, { useEffect } from "react";

const Page = () => {
  const { setPageTitle, setSubTitle } = useNavbar();

  useEffect(() => {
    setPageTitle("Leaves");
    setSubTitle("Manual Grant");
  }, [setPageTitle, setSubTitle]);

  return (
    <MainLayout
      pageTitle="Manual Grant | Next.js"
      description="Welcome to my Next.js app. Learn about the latest trends."
      keywords="Next.js, React, SEO"
    >
      <div className="container mx-auto px-4 pb-4 min-h-screen overflow-x-auto">
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <button className="h-12 w-40 rounded-lg bg-blue-600 text-base font-bold text-white shadow-lg">
              Adjust in Bulk
            </button>
          </div>

          <div className="rounded-lg bg-white shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between p-5 gap-4">
              <div className="relative w-full max-w-sm">
                <button
                  id="dropdownBtn"
                  type="button"
                  className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  2024
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-2 h-5 w-5"
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
                  className="dropdown absolute z-10 mt-2 hidden w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <ul className="py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        2024
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 014 4c0 .883-.296 1.694-.793 2.351l5.146 5.146a1 1 0 01-1.414 1.414l-5.146-5.146A4 4 0 118 4zm0 2a2 2 0 100 4 2 2 0 000-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto px-4 pb-4">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    {[
                      "Name",
                      "Status",
                      "Department/Title",
                      "Type",
                      "Email",
                      "Days Granted",
                      "Days Current",
                      "In Charge",
                      "Date Granted",
                      "Notes",
                    ].map((heading, index) => (
                      <th
                        key={index}
                        className="whitespace-nowrap border-b border-gray-300 px-2 py-2 text-center text-sm font-bold text-gray-600"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
