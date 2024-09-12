import React from 'react'

const TaskList = () => {
    return (
        <>
            <div className="lg:gap-3 lg:max-[1440px]:gap-2 md:mt-1 md:gap-1 md:flex-shrink-0 flex flex-col gap-1 ">
                <div className="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between lg:max-[1440px]:text-xs">Acceptance Pending
                    <div className="flex items-center justify-center">
                        <svg className=" mr-4" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="13" cy="13" r="13" fill="#FAD2D2" />
                            <path d="M13.9716 9.27273V18H12.9148V10.3807H12.8636L10.733 11.7955V10.7216L12.9148 9.27273H13.9716Z" fill="#E94545" />
                        </svg>
                        <button type="button" className="hover:scale-125 ease-out duration-150">
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between lg:max-[1440px]:text-xs">Incomplete Profile
                    <div className="flex items-center justify-center">
                        <svg className=" mr-4" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="13" cy="13" r="13" fill="#FAD2D2" />
                            <path d="M13.6307 18.1193C13.1307 18.1193 12.6804 18.0199 12.2798 17.821C11.8793 17.6222 11.5582 17.3494 11.3168 17.0028C11.0753 16.6562 10.9432 16.2614 10.9205 15.8182H11.9432C11.983 16.2131 12.1619 16.5398 12.4801 16.7983C12.8011 17.054 13.1847 17.1818 13.6307 17.1818C13.9886 17.1818 14.3068 17.098 14.5852 16.9304C14.8665 16.7628 15.0866 16.5327 15.2457 16.2401C15.4077 15.9446 15.4886 15.6108 15.4886 15.2386C15.4886 14.858 15.4048 14.5185 15.2372 14.2202C15.0724 13.919 14.8452 13.6818 14.5554 13.5085C14.2656 13.3352 13.9347 13.2472 13.5625 13.2443C13.2955 13.2415 13.0213 13.2827 12.7401 13.3679C12.4588 13.4503 12.2273 13.5568 12.0455 13.6875L11.0568 13.5682L11.5852 9.27273H16.1193V10.2102H12.4716L12.1648 12.7841H12.2159C12.3949 12.642 12.6193 12.5241 12.8892 12.4304C13.1591 12.3366 13.4403 12.2898 13.733 12.2898C14.267 12.2898 14.7429 12.4176 15.1605 12.6733C15.581 12.9261 15.9105 13.2727 16.1491 13.7131C16.3906 14.1534 16.5114 14.6562 16.5114 15.2216C16.5114 15.7784 16.3864 16.2756 16.1364 16.7131C15.8892 17.1477 15.5483 17.4915 15.1136 17.7443C14.679 17.9943 14.1847 18.1193 13.6307 18.1193Z" fill="#E94545" />
                        </svg>
                        <button type="button" className="hover:scale-125 ease-out duration-150">
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='lg:block md:hidden hidden'>
                    <div className="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between lg:max-[1440px]:text-xs">Probationary Employees
                        <button type="button" className="hover:scale-125 ease-out duration-150">
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='lg:block md:hidden hidden'>
                    <div className="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between lg:max-[1440px]:text-xs">Need to renew contract info
                        <button type="button" className="hover:scale-125 ease-out duration-150">
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='lg:hidden md:hidden md:flex-shrink-0 flex flex-col '>
                    <div className="line mb-1 p-4 bg-white rounded-lg text-lg font-normal flex justify-between">Probationary Employees
                        <button type='button' className="hover:scale-125 ease-out duration-150">
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                    <div className="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between">Need to renew contract info
                        <button type='button' className="hover:scale-125 ease-out duration-150">
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* probationary mobile */}
            <div className='lg:hidden md:block hidden md:flex-shrink-0 flex-col mt-1 '>
                <div className="line mb-1 p-4 bg-white rounded-lg text-lg font-normal flex justify-between">Probationary Employees
                    <button type='button' className="hover:scale-125 ease-out duration-150">
                        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                        </svg>
                    </button>
                </div>
                <div className="line p-4  overflow-hidden bg-white rounded-lg text-lg font-normal flex justify-between">Need to renew contract info
                    <button type='button' className="hover:scale-125 ease-out duration-150">
                        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.600254 0.658517C0.295613 0.96325 0.124475 1.3765 0.124475 1.80739C0.124475 2.23828 0.295613 2.65153 0.600254 2.95627L8.644 11L0.600254 19.0438C0.304247 19.3502 0.140456 19.7607 0.144158 20.1868C0.147861 20.6129 0.31876 21.0204 0.620049 21.3217C0.921336 21.623 1.32891 21.7939 1.75498 21.7976C2.18105 21.8013 2.59152 21.6375 2.898 21.3415L12.0906 12.1489C12.3953 11.8442 12.5664 11.4309 12.5664 11C12.5664 10.5691 12.3953 10.1559 12.0906 9.85114L2.898 0.658517C2.59327 0.353877 2.18002 0.182739 1.74913 0.182739C1.31824 0.182739 0.904986 0.353877 0.600254 0.658517Z" fill="#333333" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default TaskList
