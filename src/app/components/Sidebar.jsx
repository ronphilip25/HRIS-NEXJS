import React from 'react'

const Sidebar = ({isSidebarOpen}) => {
  return (
   <>
    <div className={` ${ isSidebarOpen ? "block" : "sm:hidden" } w-64 h-screen shadow-md border border-black bg-white absolute`}>
      <nav className='text-black text-base font-semibold'>
        <a href="" className='block p-4 hover:bg-gray-100'>Home</a>
        <a href="" className='block p-4 hover:bg-gray-100'>About</a>
        <a href="" className='block p-4 hover:bg-gray-100'>Services</a>
        <a href="" className='block p-4 hover:bg-gray-100'>Contacts</a>
        </nav>
    </div>
   </>
    
  )
}

export default Sidebar
