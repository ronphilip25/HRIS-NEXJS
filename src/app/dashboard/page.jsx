'use client'

import React from 'react'
import AttendanceChart from '../components/AttendanceChart';
import Monthly from '../components/Monthly';
import Approval from '../components/Approval';
import Platform from '../components/Platform';
import CompanyNews from '../components/CompanyNews';

const Dashboard = () => {
  return (
    <>

        <div className='grid grid-cols-4 gap-4'>
          <div class="flex items-center justify-center">
            <div class="rounded-lg bg-white w-full h-[119px] p-4 shadow-md">
              <div class="relative">
                <div class="absolute right-0 top-0">
                  <svg class="mr-2 mt-2" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="70" rx="12" fill="#D0E9FE" />
                    <g clip-path="url(#clip0_36_168)">
                      <path d="M30.0002 19.0937C27.8689 19.55 26.1689 20.95 25.3689 22.9125C24.6564 24.6625 24.7377 26.5875 25.6064 28.2625C26.4439 29.8937 27.8502 31.0125 29.6877 31.5125C30.1439 31.6312 30.3689 31.6562 31.2502 31.6562C32.4064 31.6562 32.9002 31.5562 33.8314 31.1562C34.8252 30.725 35.9002 29.8375 36.5002 28.9437C38.1752 26.4562 37.9127 23.1375 35.8752 20.975C34.9439 19.9875 33.8439 19.3812 32.4877 19.1C31.8939 18.975 30.5689 18.975 30.0002 19.0937Z" fill="#045CA4" />
                      <path d="M29.4695 33.375C27.1695 33.7437 25.1695 34.7437 23.507 36.3438C21.482 38.2937 20.3508 40.7812 20.157 43.7312L20.1133 44.375H26.5633H33.0133L32.9633 44.1375C32.8633 43.725 32.907 41.9 33.0258 41.2812C33.4883 38.9 34.6258 36.8187 36.3945 35.1312C36.6258 34.9125 36.8133 34.7063 36.8133 34.675C36.8133 34.5875 35.4383 33.9563 34.8133 33.7625C33.632 33.3875 32.5945 33.25 31.157 33.2562C30.5258 33.2625 29.9008 33.3062 29.4695 33.375Z" fill="#045CA4" />
                      <path d="M43.1245 35.0094C41.0451 35.2322 39.1609 36.2253 37.8346 37.8031C36.9018 38.9106 36.3223 40.1667 36.0651 41.6393C36.0062 41.9765 36 42.1405 36 42.9078C36 43.675 36.0062 43.839 36.0651 44.1762C36.3564 45.8468 37.0567 47.2297 38.2127 48.427C39.3996 49.6583 40.8964 50.438 42.6442 50.7442C42.982 50.803 43.1462 50.8092 43.9147 50.8092C44.8847 50.8092 45.176 50.7783 45.9384 50.5834C48.6716 49.878 50.8967 47.6567 51.6033 44.928C51.7985 44.1669 51.8295 43.8761 51.8295 42.9078C51.8295 41.9394 51.7985 41.6486 51.6033 40.8875C50.8967 38.162 48.6716 35.9375 45.9384 35.2322C45.2349 35.0527 44.9033 35.0125 44.0387 35.0032C43.6048 34.997 43.1927 35.0001 43.1245 35.0094ZM48.0828 39.548C48.371 39.681 48.5322 39.913 48.557 40.2224C48.5849 40.5782 48.6933 40.4544 45.8113 43.31C43.9767 45.126 43.1586 45.9149 43.0563 45.9706C42.8425 46.082 42.5574 46.0789 42.3653 45.9644C42.1948 45.8623 39.5328 43.443 39.4182 43.2852C39.1826 42.9604 39.2353 42.5087 39.5359 42.2612C39.7683 42.0663 40.0875 42.0322 40.354 42.1684C40.4222 42.2024 40.9738 42.6819 41.5812 43.2388L42.6814 44.2443L45.0273 41.9054C46.3164 40.6184 47.3794 39.5665 47.3856 39.5665C47.3949 39.5665 47.4568 39.5449 47.525 39.5201C47.7079 39.4551 47.9062 39.4644 48.0828 39.548Z" fill="#045CA4" />
                    </g>
                  </svg>
                </div>
              </div>
              <h2 class="text-md ml-2 mt-2 font-normal">Attended</h2>
              <div class="font-inter ml-2 font-sans">
                <h3 class="leading-44 text-4xl font-bold text-gray-700">25</h3>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="rounded-lg bg-white w-full h-[119px] p-4 shadow-md">
              <div class="relative">
                <div class="absolute right-0 top-0">
                  <svg class="mr-2 mt-2" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="70" rx="12" fill="#F0E1F1" />
                    <g clip-path="url(#clip0_36_182)">
                      <path d="M30.0002 19.0937C27.8689 19.55 26.1689 20.95 25.3689 22.9125C24.6564 24.6625 24.7377 26.5875 25.6064 28.2625C26.4439 29.8937 27.8502 31.0125 29.6877 31.5125C30.1439 31.6312 30.3689 31.6562 31.2502 31.6562C32.4064 31.6562 32.9002 31.5562 33.8314 31.1562C34.8252 30.725 35.9002 29.8375 36.5002 28.9437C38.1752 26.4562 37.9127 23.1375 35.8752 20.975C34.9439 19.9875 33.8439 19.3812 32.4877 19.1C31.8939 18.975 30.5689 18.975 30.0002 19.0937Z" fill="#AC5BB3" />
                      <path d="M29.4695 33.375C27.1695 33.7437 25.1695 34.7437 23.507 36.3438C21.482 38.2937 20.3508 40.7812 20.157 43.7312L20.1133 44.375H26.5633H33.0133L32.9633 44.1375C32.8633 43.725 32.907 41.9 33.0258 41.2812C33.4883 38.9 34.6258 36.8187 36.3945 35.1312C36.6258 34.9125 36.8133 34.7063 36.8133 34.675C36.8133 34.5875 35.4383 33.9563 34.8133 33.7625C33.632 33.3875 32.5945 33.25 31.157 33.2562C30.5258 33.2625 29.9008 33.3062 29.4695 33.375Z" fill="#AC5BB3" />
                      <path d="M42.5755 35.2201C40.979 35.4839 39.4908 36.2615 38.3137 37.4449C34.4309 41.3264 35.5267 47.8181 40.4717 50.2254C40.8843 50.4283 41.5269 50.6785 41.899 50.7799C42.5281 50.949 42.6769 50.9625 43.8946 50.9625C45.0513 50.9693 45.2881 50.949 45.809 50.8137C48.7651 50.0631 50.9365 47.8925 51.6874 44.9374C51.8227 44.4167 51.843 44.18 51.8362 43.0237C51.8362 41.8133 51.8227 41.651 51.6536 41.0356C50.8215 37.9656 48.1833 35.6191 45.0851 35.1863C44.3951 35.0917 43.2452 35.1052 42.5755 35.2201ZM44.3816 39.7035L44.6048 39.8996L44.6251 41.3467L44.6454 42.787L45.3151 43.4632C45.6872 43.8419 46.0051 44.2274 46.0254 44.3288C46.1539 44.8427 45.7142 45.2823 45.2001 45.1605C45.0851 45.1267 44.6793 44.7751 44.1584 44.2544C43.421 43.5173 43.2993 43.355 43.2655 43.1251C43.191 42.6856 43.2113 40.3053 43.2857 40.0348C43.4346 39.5074 43.9825 39.3451 44.3816 39.7035Z" fill="#AC5BB3" />
                    </g>
                  </svg>
                </div>
              </div>
              <h2 class="text-md ml-2 mt-2 font-normal">On Leave</h2>
              <div class="font-inter ml-2 font-sans">
                <h3 class="leading-44 text-4xl font-bold text-gray-700">03</h3>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="rounded-lg bg-white w-full h-[119px] p-4 shadow-md">
              <div class="relative">
                <div class="absolute right-0 top-0">
                  <svg class="mr-2 mt-2" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="70" rx="12" fill="#FAD2D2" />
                    <g clip-path="url(#clip0_36_194)">
                      <path d="M30.0002 19.0937C27.8689 19.55 26.1689 20.95 25.3689 22.9125C24.6564 24.6625 24.7377 26.5875 25.6064 28.2625C26.4439 29.8937 27.8502 31.0125 29.6877 31.5125C30.1439 31.6312 30.3689 31.6562 31.2502 31.6562C32.4064 31.6562 32.9002 31.5562 33.8314 31.1562C34.8252 30.725 35.9002 29.8375 36.5002 28.9437C38.1752 26.4562 37.9127 23.1375 35.8752 20.975C34.9439 19.9875 33.8439 19.3812 32.4877 19.1C31.8939 18.975 30.5689 18.975 30.0002 19.0937Z" fill="#E94545" />
                      <path d="M29.4695 33.375C27.1695 33.7437 25.1695 34.7437 23.507 36.3438C21.482 38.2937 20.3508 40.7812 20.157 43.7312L20.1133 44.375H26.5633H33.0133L32.9633 44.1375C32.8633 43.725 32.907 41.9 33.0258 41.2812C33.4883 38.9 34.6258 36.8187 36.3945 35.1312C36.6258 34.9125 36.8133 34.7063 36.8133 34.675C36.8133 34.5875 35.4383 33.9563 34.8133 33.7625C33.632 33.3875 32.5945 33.25 31.157 33.2562C30.5258 33.2625 29.9008 33.3062 29.4695 33.375Z" fill="#E94545" />
                      <path d="M43.0191 35.0341C41.5099 35.2198 40.1774 35.7736 38.9595 36.7264C38.6372 36.9801 37.8749 37.7597 37.6239 38.0939C36.7376 39.2757 36.22 40.5379 36.0465 41.9301C35.9845 42.4344 35.9845 43.4058 36.0465 43.9101C36.3502 46.3604 37.7943 48.5291 39.9667 49.7975C40.76 50.2585 41.668 50.5833 42.6442 50.7535C43.1834 50.8463 44.3269 50.868 44.8971 50.7937C48.5787 50.3327 51.4359 47.4401 51.8357 43.7647C51.8853 43.3161 51.8605 42.1157 51.7923 41.7012C51.2221 38.1929 48.4206 35.4796 44.925 35.0465C44.5066 34.997 43.3972 34.9877 43.0191 35.0341ZM41.7331 39.8913C41.8353 39.9377 42.1421 40.2224 42.9045 40.9803L43.9333 42.0075L44.9653 40.9803C46.0468 39.8975 46.1367 39.8264 46.397 39.8264C46.7379 39.8264 47.0323 40.1388 47.0323 40.4915C47.0292 40.7174 46.9331 40.8349 45.8764 41.8899L44.8475 42.9201L45.8764 43.9472C46.9331 45.0053 47.0292 45.1229 47.0323 45.3487C47.0323 45.7076 46.7255 46.0139 46.366 46.0139C46.1398 46.0108 46.022 45.9149 44.9653 44.8599L43.9333 43.8328L42.9045 44.8599C41.8446 45.9149 41.7269 46.0108 41.5007 46.0139C41.1412 46.0139 40.8344 45.7076 40.8344 45.3487C40.8375 45.1229 40.9335 45.0053 41.9903 43.9472L43.0191 42.9201L41.9903 41.8899C40.9335 40.8349 40.8375 40.7174 40.8344 40.4915C40.8344 40.1388 41.1288 39.8264 41.4697 39.8264C41.5378 39.8264 41.6556 39.8573 41.7331 39.8913Z" fill="#E94545" />
                    </g>
                  </svg>
                </div>
              </div>
              <h2 class="text-md ml-2 mt-2 font-normal">Absent</h2>
              <div class="font-inter ml-2 font-sans">
                <h3 class="leading-44 text-4xl font-bold text-gray-700">01</h3>
              </div>
            </div>
          </div>

          {/* Company News */}

          <CompanyNews />

          <div class="col-span-2">
            <div class="grid grid-cols-1">
              <div class="rounded-lg shadow-lg bg-white p-2">
                <h2 class="mb-4 text-lg font-bold">Attendance Overview</h2>
                <div className='w-full h-full'>
                <AttendanceChart />
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Tardinesss */}

          <Monthly />

          <div class="grid gap-3">
            <div class="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between cursor-pointer hover:scale-105 ease-out duration-200">Acceptance Pending
              <div class="flex items-center justify-center">
                <svg class=" mr-4" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13" cy="13" r="13" fill="#FAD2D2" />
                  <path d="M13.9716 9.27273V18H12.9148V10.3807H12.8636L10.733 11.7955V10.7216L12.9148 9.27273H13.9716Z" fill="#E94545" />
                </svg>
                <button class="hover:scale-125 ease-out duration-150">
                  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between cursor-pointer hover:scale-105 ease-out duration-200">Incomplete Profile
              <div class="flex items-center justify-center">
                <svg class=" mr-4" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13" cy="13" r="13" fill="#FAD2D2" />
                  <path d="M13.6307 18.1193C13.1307 18.1193 12.6804 18.0199 12.2798 17.821C11.8793 17.6222 11.5582 17.3494 11.3168 17.0028C11.0753 16.6562 10.9432 16.2614 10.9205 15.8182H11.9432C11.983 16.2131 12.1619 16.5398 12.4801 16.7983C12.8011 17.054 13.1847 17.1818 13.6307 17.1818C13.9886 17.1818 14.3068 17.098 14.5852 16.9304C14.8665 16.7628 15.0866 16.5327 15.2457 16.2401C15.4077 15.9446 15.4886 15.6108 15.4886 15.2386C15.4886 14.858 15.4048 14.5185 15.2372 14.2202C15.0724 13.919 14.8452 13.6818 14.5554 13.5085C14.2656 13.3352 13.9347 13.2472 13.5625 13.2443C13.2955 13.2415 13.0213 13.2827 12.7401 13.3679C12.4588 13.4503 12.2273 13.5568 12.0455 13.6875L11.0568 13.5682L11.5852 9.27273H16.1193V10.2102H12.4716L12.1648 12.7841H12.2159C12.3949 12.642 12.6193 12.5241 12.8892 12.4304C13.1591 12.3366 13.4403 12.2898 13.733 12.2898C14.267 12.2898 14.7429 12.4176 15.1605 12.6733C15.581 12.9261 15.9105 13.2727 16.1491 13.7131C16.3906 14.1534 16.5114 14.6562 16.5114 15.2216C16.5114 15.7784 16.3864 16.2756 16.1364 16.7131C15.8892 17.1477 15.5483 17.4915 15.1136 17.7443C14.679 17.9943 14.1847 18.1193 13.6307 18.1193Z" fill="#E94545" />
                </svg>
                <button class="hover:scale-125 ease-out duration-150">
                  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between cursor-pointer hover:scale-105 ease-out duration-200">Probationary Employees
              <button class="hover:scale-125 ease-out duration-150">
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                </svg>
              </button>
            </div>
            <div class="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between cursor-pointer hover:scale-105 ease-out duration-200">Need to renew contract info
              <button class="hover:scale-125 ease-out duration-150">
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                </svg>
              </button>
            </div>
          </div>

          {/* Needs Approval */}

          <Approval />

          {/* Platform Notice */}
          <Platform />

        </div>
    </>
  )
}

export default Dashboard
