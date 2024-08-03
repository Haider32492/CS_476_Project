import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <>
            <div className='min-h-screen bg-gray-100 flex items-center justify-center py-10 px-5'>
                <motion.div 
                    className='bg-white flex flex-col items-center justify-start w-full max-w-lg p-8 rounded-2xl shadow-2xl'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='text-center text-4xl tracking-wide font-bold text-gray-800 mb-8'>Profile</h1>

                    <div className='flex flex-col w-full gap-6'>
                        <div className='relative h-11 w-full min-w-[200px]'>
                            <input 
                                type='text' 
                                placeholder='Name' 
                                className='peer h-full w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-800 outline-none transition-all placeholder-shown:border-gray-300 focus:border-blue-500 disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100' 
                            />
                            <label 
                                className='after:content-[""] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500'
                            >
                                Name
                            </label>
                        </div>
                        <div className='relative h-11 w-full min-w-[200px]'>
                            <input 
                                type='email' 
                                placeholder='Email' 
                                className='peer h-full w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-800 outline-none transition-all placeholder-shown:border-gray-300 focus:border-blue-500 disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100' 
                            />
                            <label 
                                className='after:content-[""] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500'
                            >
                                Email
                            </label>
                        </div>

                        <div className='w-full mt-10 flex justify-center'>
                            <Link to='/dashboard' className='px-10 py-3 bg-[#FFE500] text-white font-bold rounded-lg tracking-wide text-lg text-center shadow-lg hover:bg-yellow-600 transition duration-300'>
                                My Dashboard
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Profile;

