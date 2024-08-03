import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card'; 

const Dashboard = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/cars');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCars(data);
            } catch (error) {
                setError('Error fetching car data.');
                console.error('Error fetching car data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <>
            <div className='flex items-center justify-center flex-col w-full px-28 py-20'>
                <h1 className='text-4xl font-semibold'>Welcome</h1>

                <div className='w-full mt-10 flex items-center justify-evenly pt-20'>
                    <Link to='/postProblem' className='px-20 text-center py-2 bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                        Post Problem
                    </Link>
                    <Link to='/results' className='px-20 text-center py-2 bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                        Search Car
                    </Link>
                </div>
            </div>

            <div className='border-t border-gray-300 flex items-center justify-center flex-col w-full gap-8 px-28 py-14'>
                <div className='flex items-center justify-center w-full'>
                    <p className='pb-2 font-semibold text-2xl'>Popular Car Searches</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {cars.length > 0 ? (
                        cars.map(car => (
                            <Link key={car.id} to={`/details/${car.id}`} className="relative flex flex-col w-full max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:scale-105 transition-all duration-300">
                                <div className="relative flex h-50 overflow-hidden">
                                    <img
                                        className="object-cover w-full h-48"
                                        src={`../components/images/${car.image}`}
                                        alt={`${car.make} ${car.model}`}
                                    />
                                </div>
                                <div className="mt-4 px-5 pb-5 flex flex-col items-center">
                                    <h5 className="text-xl tracking-tight text-slate-900">{car.make} {car.model}</h5>
                                    <p className="text-gray-600">{car.year}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No cars available at the moment.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
