
import React from 'react';
import placeholder from '../assets/placeholder2.png'
import { Link } from 'react-router-dom';

const PostSolution = () => {
    return (
        <>
            <div className='flex items-center justify-center w-full px-48 py-5'>
                <div className='bg-[#D9D9D9] flex items-center flex-col justify-start w-full h-max py-10'>
                    <h1 className='text-center text-3xl tracking-wide font-semibold'>POST A Solution</h1>



                    <div className='flex items-center justify-center flex-col w-full mt-20 gap-10 px-20'>



                        <div className='flex flex-row w-full  items-center justify-start '>
                            <div className='w-full'>
                                <p className='font-semibold pb-2 pl-1'>Select Make</p>
                                <select className=' p-2 border w-[80%] border-gray-300 rounded'>
                                    <option>Vehicle Make</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <p className='font-semibold pb-2 pl-1'>Select Model</p>
                                <select className='p-2 border w-[80%] border-gray-300 rounded'>
                                    <option>Vehicle Model</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>

                        </div>


                        <div className='flex flex-row w-full items-center justify-start '>
                            <div className='w-full'>
                                <p className='font-semibold pb-2 pl-1'>Select Year</p>
                                <select className=' p-2 border w-[80%] border-gray-300 rounded'>
                                    <option>Vehicle Year</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <p className='font-semibold pb-2 pl-1'>Upload Image/Video</p>
                                <button className='p-2 border w-full border-gray-300 rounded  '>
                                    <input type='file' className='hidden' />
                                    <img src={placeholder} alt='placeholder' className='w-36 ' />
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className=' flex items-start w-full justify-center mt-20  px-20 flex-col'>

                        <p className='font-semibold text-lg text-left'> Label</p>
                        <p className=' text-lg text-left text-gray-500 pt-2'> Solution Description</p>

                        <textarea className='w-full min-h-80 mt-4' />

                        <div className='w-full mt-10 flex gap-8 items-center justify-start' >
                            <Link to='/dashboard' className=' px-32 text-nowrap text-center  py-2  bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                                Submit
                            </Link>
                            <Link to='/dashboard' className='px-32 text-nowrap text-center  py-2  bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                                Reset
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostSolution