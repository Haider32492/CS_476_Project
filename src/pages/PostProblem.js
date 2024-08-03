import React, { useState } from 'react';
import axios from 'axios';
import placeholder from '../assets/placeholder2.png';
import { Link } from 'react-router-dom';

const PostProblem = () => {
    const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai'];
    const models = {
        'Toyota': ['Corolla', 'Camry', 'RAV4'],
        'Honda': ['Civic', 'Accord', 'CR-V'],
        'Ford': ['Focus', 'Mustang', 'Explorer'],
        'Chevrolet': ['Cruze', 'Malibu', 'Equinox'],
        'Nissan': ['Sentra', 'Altima', 'Rogue'],
        'BMW': ['3 Series', '5 Series', 'X5'],
        'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC'],
        'Audi': ['A4', 'A6', 'Q5'],
        'Volkswagen': ['Golf', 'Passat', 'Tiguan'],
        'Hyundai': ['Elantra', 'Sonata', 'Tucson']
    };
    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('make', selectedMake);
        formData.append('model', selectedModel);
        formData.append('year', selectedYear);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('username', username);

        try {
            const response = await axios.post('http://localhost:3000/api/problems', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data.message);
            setErrorMessage(''); // Clear error message on successful submission
        } catch (error) {
            console.error('Error posting problem:', error.response?.data || error.message);
            setErrorMessage(error.response?.data?.error || 'Error posting problem');
        }
    };

    return (
        <div className='flex items-center justify-center w-full px-48 py-5'>
            <div className='bg-[#D9D9D9] flex items-center flex-col justify-start w-full h-max py-10'>
                <h1 className='text-center text-3xl tracking-wide font-semibold'>POST A PROBLEM</h1>

                <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col w-full mt-20 gap-10 px-20'>
                    <div className='flex flex-row w-full items-center justify-start'>
                        <div className='w-full'>
                            <p className='font-semibold pb-2 pl-1'>Select Make</p>
                            <select
                                className='p-2 border w-[80%] border-gray-300 rounded'
                                value={selectedMake}
                                onChange={e => setSelectedMake(e.target.value)}
                                required
                            >
                                <option value=''>Vehicle Make</option>
                                {makes.map(make => (
                                    <option key={make} value={make}>{make}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full'>
                            <p className='font-semibold pb-2 pl-1'>Select Model</p>
                            <select
                                className='p-2 border w-[80%] border-gray-300 rounded'
                                value={selectedModel}
                                onChange={e => setSelectedModel(e.target.value)}
                                required
                                disabled={!selectedMake}
                            >
                                <option value=''>Vehicle Model</option>
                                {selectedMake && models[selectedMake].map(model => (
                                    <option key={model} value={model}>{model}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-row w-full items-center justify-start'>
                        <div className='w-full'>
                            <p className='font-semibold pb-2 pl-1'>Select Year</p>
                            <select
                                className='p-2 border w-[80%] border-gray-300 rounded'
                                value={selectedYear}
                                onChange={e => setSelectedYear(e.target.value)}
                                required
                            >
                                <option value=''>Vehicle Year</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full'>
                            <p className='font-semibold pb-2 pl-1'>Upload Image/Video</p>
                            <input
                                type='file'
                                className='p-2 border w-[80%] border-gray-300 rounded'
                                onChange={e => setImage(e.target.files[0])}
                            />
                            {image && <img src={URL.createObjectURL(image)} alt='Preview' className='w-36 mt-2' />}
                        </div>
                    </div>

                    <div className='flex flex-row w-full items-center justify-start'>
                        <div className='w-full'>
                            <p className='font-semibold pb-2 pl-1'>Username</p>
                            <input
                                type='text'
                                className='p-2 border w-[80%] border-gray-300 rounded'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-col w-full mt-20'>
                        <p className='font-semibold text-lg text-left'>Problem Description</p>
                        <textarea
                            className='w-full p-2 border border-gray-300 rounded mt-2'
                            rows='4'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    {errorMessage && (
                        <div className='text-red-500 mt-4'>
                            {errorMessage}
                        </div>
                    )}

                    <div className='w-full mt-10 flex gap-8 items-center justify-start'>
                        <button type='submit' className='px-32 py-2 bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                            Submit
                        </button>
                        <button type='reset' className='px-32 py-2 bg-[#FFE500] font-semibold rounded-md tracking-wide text-lg'>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostProblem;
