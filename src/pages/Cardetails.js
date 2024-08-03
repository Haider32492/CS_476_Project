import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const { id } = useParams(); 
    const [car, setCar] = useState(null);
    const [problems, setProblems] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/cars/:id${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCar(data);

                const problemsResponse = await fetch(`http://localhost:3000/api/problemss?make=${data.make}&model=${data.model}&year=${data.year}`);
                if (!problemsResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const problemsData = await problemsResponse.json();
                setProblems(problemsData);

                const solutionsResponse = await fetch(`http://localhost:3000/api/solutions?make=${data.make}&model=${data.model}&year=${data.year}`);
                if (!solutionsResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const solutionsData = await solutionsResponse.json();
                setSolutions(solutionsData);
            } catch (error) {
                setError('Error fetching car details.');
                console.error('Error fetching car details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!car) return <p className="text-center text-gray-500">Car not found.</p>;

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-6">
                <h1 className="text-4xl font-semibold text-center mb-4">{car.make} {car.model}</h1>
                <div className="flex justify-center mb-6">
                    <img
                        className="object-cover w-full h-96 max-w-md rounded-lg"
                        src={`./images/${car.image}`} 
                        alt={`${car.make} ${car.model}`}
                    />
                </div>
                <div className="text-center">
                    <p className="text-2xl font-semibold">Details</p>
                    <div className="mt-4">
                        <p className="text-lg"><strong>Make:</strong> {car.make}</p>
                        <p className="text-lg"><strong>Model:</strong> {car.model}</p>
                        <p className="text-lg"><strong>Year:</strong> {car.year}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-2xl font-semibold">Problems</p>
                    {problems.length > 0 ? (
                        <ul className="mt-4">
                            {problems.map(problem => (
                                <li key={problem.id} className="border-b border-gray-300 py-2">
                                    <p><strong>Description:</strong> {problem.description}</p>
                                    {problem.image && <img className="w-40 mt-2" src={`./images/${problem.image}`} alt="Problem" />}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No problems reported.</p>
                    )}
                </div>

                <div className="mt-8">
                    <p className="text-2xl font-semibold">Solutions</p>
                    {solutions.length > 0 ? (
                        <ul className="mt-4">
                            {solutions.map(solution => (
                                <li key={solution.id} className="border-b border-gray-300 py-2">
                                    <p><strong>Username:</strong> {solution.username}</p>
                                    <p><strong>Description:</strong> {solution.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No solutions available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
