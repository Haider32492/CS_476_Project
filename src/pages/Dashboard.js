import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card';
const Dashboard = () => {
    return (
        <>
            <div className=' flex items-center justify-center flex-col w-full px-28 py-20'>

                <h1 className='text-4xl font-semibold'>Welcome, Username</h1>

                <div className='w-full  mt-10 flex items-center justify-evenly pt-20 ' >
                    <Link to='/postProblem' className='px-20 text-center  py-2  bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                        Post Problem
                    </Link>
                    <Link to='/results' className='px-20 text-center  py-2  bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                        Search Solutions
                    </Link>
                    <Link to='/postSolution' className='px-20 text-center  py-2  bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                        Post Solutions
                    </Link>
                </div>
            </div>

            <div className='border-t  border-gray-300 flex items-center justify-center flex-col w-full gap-8 px-28 py-14 '>
                <div className='flex items-center justify-center w-full'>
                    <p className='pb-2 font-semibold text-2xl'>Recent Activities</p>
                </div>
                <div className='flex items-center justify-start w-full pt-6'>
                    <p className='pb-2 font-semibold text-lg'>Solutions to Posted Problems</p>
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
    )
}

export default Dashboard