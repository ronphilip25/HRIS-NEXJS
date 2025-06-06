import React from 'react'

const CompanyNews = () => {
    return (
        <>
            <div className='rounded-lg bg-white lg:p-4 p-2 pt-3 shadow-md lg:row-span-2 md:row-span-1 overflow-x-auto overflow-y-auto w-[100%] lg:h-full md:h-auto h-[35vh]'>
                <div>
                    <div className="lg:relative lg:max-[1024px]:hidden md:relative relative">
                        <div className="absolute right-0 top-0 cursor-pointer">
                            <button aria-label="Add" className='border border-blue-400 rounded-lg text-base font-sans font-bold text-blue-400 hover:bg-blue-400 hover:text-white px-3 py-1 lg:w-24 lg:h-10'>
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="font-inter ml-2 lg:mt-3 md:mt-1 font-sans text-base overflow-hidden">
                        <h5 className="lg:text-2xl font-bold text-black md:text-base">Company News</h5>
                    </div>
                    <div className="font-inter flex items-center justify-center font-sans lg:text-base font-normal md:text-sm md:mt-5">No News</div>
                </div>
            </div>
        </>
    )
}

export default CompanyNews
