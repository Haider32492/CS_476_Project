import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations
import logo from './../assets/AutoGeniusLogo.png'; // Importing the logo
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons from react-icons
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', formData);
            console.log('Response:', response); // Log the response data
            alert(response.data.message);
            setErrorMessage(''); // Clear any previous error message
            navigate('/dashboard'); // Redirect to the dashboard
        } catch (error) {
            console.error('Login error:', error); // Log the entire error object
            const message = error.response?.data?.error || 'An error occurred. Please try again.';
            console.log('Error Message:', message); // Log the error message
            setErrorMessage(message); // Set the error message to be displayed
        }
    };

    return (
        <div className='min-h-screen bg-white flex flex-col items-center justify-center'>
            <motion.img 
                src={logo} 
                alt="AutoGenius Logo" 
                className='w-24 h-24 md:w-32 md:h-32 mb-8' 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1 }}
            />
            <motion.h1 
                className='text-4xl md:text-5xl font-bold tracking-wide text-gray-800 mb-8' 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.5 }}
            >
                Sign In
            </motion.h1>
            <motion.form 
                className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg' 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 1 }}
                onSubmit={handleSubmit}
            >
                {errorMessage && (
                    <div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
                        {errorMessage}
                    </div>
                )}
                <div className='mb-6'>
                    <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <div className='flex items-center border-b border-gray-300 py-2'>
                        <FaEnvelope className='text-gray-500 mr-3' />
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            value={formData.email} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Your email' 
                            required 
                        />
                    </div>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <div className='flex items-center border-b border-gray-300 py-2'>
                        <FaLock className='text-gray-500 mr-3' />
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            value={formData.password} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Your password' 
                            required 
                        />
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button 
                        type='submit' 
                        className='bg-[#FFE500] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                    >
                        Sign In
                    </button>
                </div>
                <div className='mt-4 text-center'>
                    <Link to='/forgot-password' className='text-gray-800 hover:text-yellow-700 font-bold'>
                        Forgot Password?
                    </Link>
                </div>
                <div className='mt-4 text-center'>
                    <p className='text-gray-800'>
                        Don't have an account?{' '}
                        <Link to='/signup' className='text-yellow-500 hover:text-yellow-700 font-bold'>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </motion.form>
        </div>
    );
}

export default SignIn;
