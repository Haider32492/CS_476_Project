import React, { useState } from 'react';

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false); 

    const handleResetPassword = (e) => {
        e.preventDefault();
        
        setEmailSent(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Forgot Password</h1>
                {!emailSent ? (
                    <form onSubmit={handleResetPassword}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="appearance-none bg-gray-100 border-none w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none rounded-lg" 
                                placeholder="Enter your email" 
                                required 
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                type="submit" 
                                className="bg-[#FFE500] hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center">
                        <p className="text-green-600 text-lg font-semibold">An email has been sent to reset your password.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;



