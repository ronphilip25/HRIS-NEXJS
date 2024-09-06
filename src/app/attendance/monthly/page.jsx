import MainLayout from '../../Layout/MainLayout';
import AttendanceWidget from '../../components/AttendanceWidget';
import React from 'react'

const page = () => {
  return (
    <>
      <MainLayout
        pageTitle="Monthly | Next.js"
        description="Welcome to my Next.js app. Learn about the latest trends."
        keywords="Next.js, React, SEO"
      >
        <div className='grid grid-cols-4 gap-4'>

          <AttendanceWidget />

          <div className=" col-start-4 rounded-md cursor-pointer">
            <div className="flex items-center justify-end">
              <div className="text-white text-xs font-sans font-inter font-bold">
                <div className="flex justify-center w-36 h-11 border mt-14 bg-blue-700 text-white rounded-lg">
                  <button>
                    Download Excel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md col-span-4 h-[715px] mt-1 pb-2">
            <div className="flex justify-between items-center mt-3 ml-3">
              <h5 className="leading-44 text-2xl font-bold text-gray-700">Attendance</h5>
            </div>

            {/* {% include '_components/_attendance[components]/thresholdtab.html' %} */}

            <div className="grid grid-cols-8 font-sans font-inter text-base font-bold text-gray-700 mt-10 ml-1 py-2">
              <table className="col-span-8 border-separate border-gray-200 border-spacing-y-[0.5rem] my-[-2rem]">
                <colgroup>
                  <col span="3" className="text-center" />
                </colgroup>
                <thead>
                  <tr>
                    <th className="text-gray-500 border-b text-left border-gray-700">Name</th>
                    <th className="text-gray-500 border-b border-gray-700">Department</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Work Schedule</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Worked Hour</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Overtime</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Holiday Work</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Holiday Overtime</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Leave</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Tardiness</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Under time</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Absences</th>
                    <th className="text-gray-500 py-2 border-b border-gray-700">Custom Policy</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-xs font-normal font-inter">
                  <tr>
                    <td className="inline-flex relative">
                      <img
                        src="/assets/employee1.png"
                        className="rounded-full border border-b h-12 w-12"
                        alt="profile"
                      />
                      <div className="absolute bottom-[1.5px] left-9 mb-1 border-white border-2 bg-green-600 rounded-full w-4 h-4"></div>
                      <div className="text-sm font-bold font-sans font-inter mt-1 ml-2">
                        Chan P Dacillo
                        <div className="text-xs font-sans font-inter font-normal mt-1">
                          Team Leader
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className="px-3 py-2 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </MainLayout>
    </>
  )
}

export default page
