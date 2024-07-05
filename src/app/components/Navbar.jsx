import React from 'react'
import Image from 'next/image'
import User from '../assets/user.png'

const Navbar = () => {
  return (
    <>
      <div className=''>
        <nav class="relative z-10 flex-shrink-0 flex h-20 items-center justify-center mx-auto lg:ml-64 md:ml-64 bg-white border border-black">
          {/* <!-- Add your header content here --> */}
          <div class="flex w-full justify-between px-4">
            <h1 class="text-lg font-semibold text-gray-900"><span id="navbarText">Dashboard</span></h1>
            <span id="subtext"></span>
            <div class="flex items-center justify-end">
              <Image src={User} class="mr-2 h-12 w-12 rounded-full bg-gray-100 " alt="Profile Icon" />
              <button class="mt-1 flex items-center justify-between" id="userBtn">
                <div class="text-left">
                  <div class="flex items-center justify-end">
                    <div class="font-sans text-base font-bold text-gray-600">User Name</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-4 w-4" viewBox="0 0 512 512" id="dropdown"><path d="M128 192l128 128 128-128z"></path></svg>
                  </div>
                  <div class="font-sans text-sm font-normal text-gray-600">Admin</div>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
