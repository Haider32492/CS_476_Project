// src/pages/Home.js
import React from 'react';
import img from './../assets/main.png'
import Card from '../components/Card';

const Home = () => {
    return (
        <>


            <div className='pt-14 pl-28 pr-20 '>
                <h1 className='text-5xl font-semibold tracking-wide'>Hello!</h1>
                <p className='text-gray-500 text-xl pt-5 '>We have some recommendations for you.</p>
            </div>


            <div className="min-h-[85vh] flex items-center justify-center pt-4 pl-20 pr-20 pb-20 gap-10  ">


                <div className='min-w-[40vw] max-w-[40vw]    p-5'>

                    <div className='flex items-start justify-start w-full flex-col'>




                        <div className=''>



                            <div className='grid grid-cols-2 gap-10 pt-8'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>



                        </div>





                    </div>



                </div>
                <div className='  max-w-[40vw] flex items-center justify-center'>
                    <img src={img} alt='logo-img' className=' max-w-[40vw]  p-5' />
                </div>

            </div>
        </>

    );
}

export default Home;
