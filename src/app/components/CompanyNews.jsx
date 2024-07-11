import React from 'react'

const CompanyNews = () => {
    return (
        <>
        
            <div className="rounded-lg bg-white p-4 shadow-md lg:row-span-2 md:row-span-1 ">
                <div className="relative">
                    <div className="absolute right-0 top-0 cursor-pointer">
                        <button className='border border-blue-400 rounded-lg text-base font-sans font-bold text-blue-400 px-3 py-1 lg:w-24 lg:h-10 md:w-24'>
                            Add
                        </button>
                    </div>
                    <div className="font-inter ml-2 lg:mt-3 md:mt-1 font-sans">
                        <h5 className="lg:text-2xl font-bold text-black md:text-base">Company News</h5>
                    </div>
                    <div className="font-inter flex items-center justify-center font-sans lg:text-base font-normal md:text-sm md:mt-5">No News</div>
                </div>
            </div>

        </>
    )
}

export default CompanyNews
