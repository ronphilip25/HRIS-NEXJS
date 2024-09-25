import React from 'react'

const worksched = () => {
    return (
        <>
            <div className='col-start-3 row-start-1 mt-48 mx-2'>
                <div className="mt-4 space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-lg shadow-lg bg-white h-auto p-4 flex justify-between items-center">
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
