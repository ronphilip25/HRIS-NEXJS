import React from 'react'

const worksched = () => {
    return (
        <>
            <div className='lg:col-start-3 lg:row-start-1 md:col-start-2 md:row-start-2 lg:mt-48 mb-4 md:mt-14'>
                <div className="lg:mt-4 space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-lg shadow-lg bg-white h-auto  p-4 flex justify-between items-center">
                            <span className="font-bold text-black">Work Schedule {i}</span>
                            <button className="border border-blue-600 text-blue-600 rounded-md px-4 py-2">Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default worksched
