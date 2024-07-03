// src/pages/ForgotPassword.js
import React from 'react';
import img from './../assets/main.png'
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
    return (

        <>

            <div className="min-h-[85vh] flex items-center justify-center pt-14 pl-20 pr-20 pb-20 gap-10  ">

                <div className='min-w-[40vw] max-w-[40vw] min-h-[85vh] max-h-[85vh] flex items-center justify-center'>
                    <img src={img} alt='logo-img3' className='min-w-[40vw] max-w-[40vw] min-h-[85vh] max-h-[85vh]' />
                </div>

                <div className='min-w-[40vw] max-w-[40vw] bg-[#D9D9D9] min-h-[85vh] max-h-[85vh]  '>

                    <div className='flex items-center justify-center w-full min-h-[85vh] max-h-[85vh] flex-col'>


                        <div className='flex flex-col gap-[3vh] h-full  w-full items-center justify-center'>


                            <p className='font-semibold text-xl pb-20'>Enter your email to reset your password</p>

                            <div class="flex flex-col gap-6 w-[70%]">
                                <div class="relative h-11 w-full min-w-[200px]">
                                    <input placeholder="Email"
                                        class="peer h-full w-full border-b border-gray-800 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                                    <label
                                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Email
                                    </label>
                                </div>
                            </div>

                        </div>
                        <Link to='' className='text-center px-[20%] py-2 mt-16 bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                            Reset Password
                        </Link>
                        <Link to='/signin' className='text-center px-[28%] py-2 mt-5 bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                            Login
                        </Link>








                    </div>



                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
