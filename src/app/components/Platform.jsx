import React from 'react'

const CompanyNews = () => {
    return (
        <>
        
            <div className="rounded-xl bg-white lg:p-4 md:p-2 shadow-md col-span-1 lg:col-start-4 lg:h-auto lg:row-start-3 md:row-start-4 overflow-x-auto overflow-y-auto lg:max-[1440px]:w-4/5 lg:max-[1440px]:h-[30vh] h-[24vh] md:h-[40vh]">
                <div className="relative">
                    <div className="font-inter ml-2 mt-1 font-sans ">
                        <h5 className="lg:text-2xl font-bold text-black md:text-base lg:max-[1440px]:text-base">Platform Notice</h5>
                    </div>
                    <div className="font-inter font-sans">
                        <div className=" text-base font-normal flex justify-center">No Notice</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CompanyNews
