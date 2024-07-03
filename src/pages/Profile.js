// src/pages/Profile.js
import React from 'react';
import placeholder from '../assets/placeholder.png'
import Card from '../components/Card';
import { Link } from 'react-router-dom';
const Profile = () => {
    const card = {}
    return (
        <>


            <div className='flex items-center justify-start w-full gap-20 px-28 py-20' >
                <div className='max-w-[50%]'>
                    <div>
                        <p className='pb-2 font-semibold'>Profile Photo</p>
                        <img src={placeholder} alt='placeholder' className='w-full h-full' />
                    </div>
                    <div className='w-ful mt-10 flex items-center justify-center' >
                        <Link to='/dashboard' className='w-full text-center  py-2  bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                            My Dashboard
                        </Link>
                    </div>


                </div>


                <div className='flex-1 max-w-[50%]'>
                    <div class="relative mt-6">
                        <input type="email" name="email" id="email" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                        <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                    </div>
                    <div class="relative mt-6">
                        <input type="text" name="firstName" id="firstName" placeholder="First Name" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                        <label for="firstName" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">First Name</label>
                    </div>
                    <div class="relative mt-6">
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                        <label for="lastName" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Last Name</label>
                    </div>
                </div>
            </div>

            <div className='border-t  border-gray-300 flex items-center justify-center flex-col w-full gap-8 px-28 py-14 '>
                <div className='flex items-center justify-start w-full'>
                    <p className='pb-2 font-semibold text-lg'>Posted Problems</p>
                </div>

                <div className=' '>
                    <div className='flex items-center justify-center gap-8 '>
                        <Card />
                        <Card />
                        <Card />
                        <Card />



                    </div>

                </div>

            </div>
            <div className='border-t  border-gray-300 flex items-center justify-center flex-col w-full gap-8 px-28 py-14 '>
                <div className='flex items-center justify-start w-full'>
                    <p className='pb-2 font-semibold text-lg'>Posted Solutions</p>
                </div>

                <div className=' '>
                    <div className='flex items-center justify-center  gap-8'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>

                </div>

            </div>


        </>
    );
}

export default Profile;
