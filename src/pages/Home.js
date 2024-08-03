import React, { useState, useEffect } from 'react';

const Home = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

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
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-5xl font-semibold tracking-wide text-center mb-10">Hello!</h1>
                <p className="text-gray-500 text-xl text-center mb-10">We have some recommendations for you.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {cars.length > 0 ? (
                        cars.map(car => (
                            <div key={car.id} className="relative flex flex-col w-full max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:scale-105 transition-all duration-300">
                                <div className="relative flex h-50 overflow-hidden">
                                    <img
                                        className="object-cover w-full h-48"
                                        src={`http://localhost:3000/images/${car.image}`} 
                                        alt={`${car.make} ${car.model}`}
                                    />
                                </div>
                                <div className="mt-4 px-5 pb-5 flex flex-col items-center">
                                    <h5 className="text-xl tracking-tight text-slate-900">{car.make} {car.model}</h5>
                                    <p className="text-gray-600">{car.year}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No cars available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
