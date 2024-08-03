import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './../assets/AutoGeniusLogo.png';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confirm_email: '',
        password: '',
        confirm_password: '',
        phone_number: ''
    });
    const [errorMessages, setErrorMessages] = useState({
        name: '',
        email: '',
        confirm_email: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        general: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/signup', formData);
            console.log('Response:', response);
            alert(response.data.message);
            setErrorMessages(''); // Clear any previous error messages
        } catch (error) {
            console.error('Signup error:', error);
            const errors = error.response?.data?.error || 'An error occurred. Please try again.';
            const fieldErrors = {
                name: '',
                email: '',
                confirm_email: '',
                password: '',
                confirm_password: '',
                phone_number: '',
                general: errors
            };

            // Split the error message and assign it to the relevant field
            if (errors.includes('Emails do not match')) {
                fieldErrors.email = errors;
                fieldErrors.confirm_email = errors;
            } else if (errors.includes('Passwords do not match')) {
                fieldErrors.password = errors;
                fieldErrors.confirm_password = errors;
            } else if (errors.includes('User already exists')) {
                fieldErrors.email = errors;
                fieldErrors.confirm_email = errors;
            } else {
                fieldErrors.general = errors;
            }

            setErrorMessages(fieldErrors);
        }
    };

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
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
                Sign Up
            </motion.h1>
            <motion.form 
                className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg' 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 1 }}
                onSubmit={handleSubmit}
            >
                {/* Name Field */}
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Name
                    </label>
                    <div className='flex items-center border-b border-gray-500 py-2'>
                        <FaUser className='text-gray-500 mr-3' />
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            value={formData.name} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Your name' 
                            required 
                        />
                    </div>
                    {errorMessages.name && <p className='text-red-500 text-xs italic'>{errorMessages.name}</p>}
                </div>
                {/* Email Field */}
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <div className='flex items-center border-b border-gray-500 py-2'>
                        <FaEnvelope className='text-gray-500 mr-3' />
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            value={formData.email} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Your email' 
                            required 
                        />
                    </div>
                    {errorMessages.email && <p className='text-red-500 text-xs italic'>{errorMessages.email}</p>}
                </div>
                {/* Confirm Email Field */}
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirm_email'>
                        Confirm Email
                    </label>
                    <div className='flex items-center border-b border-gray-500 py-2'>
                        <FaEnvelope className='text-gray-500 mr-3' />
                        <input 
                            type='email' 
                            name='confirm_email' 
                            id='confirm_email' 
                            value={formData.confirm_email} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Confirm your email' 
                            required 
                        />
                    </div>
                    {errorMessages.confirm_email && <p className='text-red-500 text-xs italic'>{errorMessages.confirm_email}</p>}
                </div>
                {/* Password Field */}
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <div className='flex items-center border-b border-gray-500 py-2'>
                        <FaLock className='text-gray-500 mr-3' />
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            value={formData.password} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Your password' 
                            required 
                        />
                    </div>
                    {errorMessages.password && <p className='text-red-500 text-xs italic'>{errorMessages.password}</p>}
                </div>
                {/* Confirm Password Field */}
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirm_password'>
                        Confirm Password
                    </label>
                    <div className='flex items-center border-b border-gray-500 py-2'>
                        <FaLock className='text-gray-500 mr-3' />
                        <input 
                            type='password' 
                            name='confirm_password' 
                            id='confirm_password' 
                            value={formData.confirm_password} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Confirm your password' 
                            required 
                        />
                    </div>
                    {errorMessages.confirm_password && <p className='text-red-500 text-xs italic'>{errorMessages.confirm_password}</p>}
                </div>
                {/* Phone Number Field */}
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone_number'>
                        Phone Number
                    </label>
                    <div className='flex items-center border-b border-gray-500 py-2'>
                        <FaPhone className='text-gray-500 mr-3' />
                        <input 
                            type='text' 
                            name='phone_number' 
                            id='phone_number' 
                            value={formData.phone_number} 
                            onChange={handleChange} 
                            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                            placeholder='Your phone number' 
                            required 
                        />
                    </div>
                    {errorMessages.phone_number && <p className='text-red-500 text-xs italic'>{errorMessages.phone_number}</p>}
                </div>
                {/* General Error Message */}
                {errorMessages.general && <p className='text-red-500 text-xs italic mb-4'>{errorMessages.general}</p>}
                {/* Submit Button */}
                <button 
                    type='submit' 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Sign Up
                </button>
                {/* Link to Sign In */}
                <div className='mt-4'>
                    <p className='text-gray-600 text-sm'>
                        Already have an account? <Link to='/signin' className='text-blue-500 hover:text-blue-700'>Sign In</Link>
                    </p>
                </div>
            </motion.form>
        </div>
    );
};

export default SignUp;