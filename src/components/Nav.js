import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();


    const showAutoGeniusRoutes = ['/signin', '/signup', '/forgotPassword', '/home', '/',];


    const showAutoGenius = showAutoGeniusRoutes.includes(location.pathname);

    return (
        <div className='min-h-[10vh] max-h-[13vh] pt-7'>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='items-center flex justify-start w-[50%] pl-20'>
                    {showAutoGenius ? (
                        <p className='text-xl font-semibold cursor-pointer'>AutoGenius</p>
                    ) : (
                        <div className='flex items-center justify-start w-full'>
                            <form className="w-80">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className='flex items-center justify-end gap-4 pr-20 w-[50%]'>
                    <Link to="/home" className='hover:bg-black px-4 py-2 transition-all hover:text-white hover:rounded-md duration-300 cursor-pointer'>
                        <p className='font-semibold'>Home</p>
                    </Link>
                    <Link to="/about" className='hover:bg-black px-4 py-2 transition-all hover:text-white hover:rounded-md duration-300 cursor-pointer'>
                        <p className='font-semibold'>About</p>
                    </Link>
                    <Link to="/profile" className='hover:bg-black px-4 py-2 transition-all hover:text-white hover:rounded-md duration-300 cursor-pointer'>
                        <p className='font-semibold'>Profile</p>
                    </Link>
                    <Link to="/signin" className='hover:bg-black px-4 py-2 transition-all hover:text-white hover:rounded-md duration-300 cursor-pointer'>
                        <p className='font-semibold'>Login</p>
                    </Link>
                    <Link to="/signup" className='hover:bg-black px-4 py-2 transition-all hover:text-white hover:rounded-md duration-300 cursor-pointer'>
                        <p className='font-semibold'>Sign Up</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
