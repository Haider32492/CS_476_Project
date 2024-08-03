import React from 'react';
import logo from './../assets/AutoGeniusLogo.png'; 
import { motion } from 'framer-motion'; 
import { FaTools, FaCar, FaUsers, FaLightbulb } from 'react-icons/fa'; 

const About = () => {
    return (
        <>
            <div className='min-h-screen bg-white flex flex-col items-center'>
                <motion.img 
                    src={logo} 
                    alt="AutoGenius Logo" 
                    className='w-24 h-24 md:w-32 md:h-32 mt-10 mb-4' 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1 }}
                />
                <motion.h1 
                    className='text-4xl md:text-5xl font-bold tracking-wide text-gray-800' 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    About AutoGenius
                </motion.h1>
                <motion.p 
                    className='text-lg md:text-xl pt-4 text-center text-gray-700 max-w-2xl' 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 1 }}
                >
                    Welcome to AutoGenius, the ultimate platform designed to empower vehicle owners with the knowledge and tools needed to tackle automotive issues with confidence. Whether you're a novice or have some technical know-how, AutoGenius is here to guide you every step of the way.
                </motion.p>
                <div className='mt-10 flex flex-col items-center'>
                    <motion.div 
                        className='w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mb-6' 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <p className='text-lg md:text-xl text-gray-800 italic'>"AutoGenius saved me hundreds of dollars in repair costs. The step-by-step guides are easy to follow and incredibly helpful!"</p>
                        <p className='text-sm md:text-base text-gray-600 text-right mt-2'>- Sarah W.</p>
                    </motion.div>
                    <motion.div 
                        className='w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mb-6' 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 1.7 }}
                    >
                        <p className='text-lg md:text-xl text-gray-800 italic'>"As a car enthusiast, I love sharing my knowledge on AutoGenius. It's a great community for learning and helping others."</p>
                        <p className='text-sm md:text-base text-gray-600 text-right mt-2'>- John D.</p>
                    </motion.div>
                    <motion.div 
                        className='w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mb-6' 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 1.9 }}
                    >
                        <p className='text-lg md:text-xl text-gray-800 italic'>"I was able to fix my car's electrical issue by following a guide on AutoGenius. The community support is amazing."</p>
                        <p className='text-sm md:text-base text-gray-600 text-right mt-2'>- Emily R.</p>
                    </motion.div>
                    <motion.div 
                        className='w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mb-6' 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 2.1 }}
                    >
                        <p className='text-lg md:text-xl text-gray-800 italic'>"The detailed explanations and community-driven content on AutoGenius are top-notch. Highly recommend to all car owners."</p>
                        <p className='text-sm md:text-base text-gray-600 text-right mt-2'>- Mark T.</p>
                    </motion.div>
                </div>
            </div>
            <div className="min-h-[85vh] flex flex-col items-center justify-center pt-4 px-6 md:px-20 pb-20 gap-10 bg-white">
                <motion.div 
                    className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-md' 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className='flex flex-col items-center'>
                        <FaTools className='text-6xl text-gray-800 mb-4' />
                        <h3 className='text-2xl font-semibold text-gray-800'>Resources</h3>
                        <p className='text-lg text-gray-700 text-center'>We provide a wide range of resources to help you diagnose and fix your vehicle issues effectively.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaCar className='text-6xl text-gray-800 mb-4' />
                        <h3 className='text-2xl font-semibold text-gray-800'>Expert Guidance</h3>
                        <p className='text-lg text-gray-700 text-center'>Get expert advice and step-by-step guides from professionals and experienced mechanics in the community.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaUsers className='text-6xl text-gray-800 mb-4' />
                        <h3 className='text-2xl font-semibold text-gray-800'>Community Support</h3>
                        <p className='text-lg text-gray-700 text-center'>Join a supportive community where you can share experiences, ask questions, and get help from fellow car owners.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaLightbulb className='text-6xl text-gray-800 mb-4' />
                        <h3 className='text-2xl font-semibold text-gray-800'>Innovative Solutions</h3>
                        <p className='text-lg text-gray-700 text-center'>Discover innovative solutions and stay updated with the latest trends and technologies in automotive repair.</p>
                    </div>
                </motion.div>
                <motion.div 
                    className='w-full max-w-4xl p-6 bg-white rounded-lg shadow-md' 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className='flex flex-col gap-6 text-gray-700'>
                        <motion.h2 
                            className='text-3xl md:text-4xl font-semibold text-gray-800' 
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            What We Do
                        </motion.h2>
                        <motion.p 
                            className='text-lg md:text-xl text-gray-700' 
                            initial={{ opacity: 0, x: 50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            At AutoGenius, we aim to provide a comprehensive platform where vehicle owners can find detailed, step-by-step solutions for various automotive issues. Our platform is community-driven, leveraging the collective expertise of both amateur and professional mechanics. This approach helps vehicle owners save on repair costs while gaining a deeper understanding of their vehicles.
                        </motion.p>
                        <motion.h2 
                            className='text-3xl md:text-4xl font-semibold text-gray-800' 
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            Our Mission
                        </motion.h2>
                        <motion.p 
                            className='text-lg md:text-xl text-gray-700' 
                            initial={{ opacity: 0, x: 50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Our mission is to bridge the gap between vehicle owners and the knowledge they need to effectively address automotive problems. We strive to make vehicle maintenance and repair more accessible and less time-consuming for everyone, fostering a community where users can share their experiences and insights.
                        </motion.p>
                        <motion.h2 
                            className='text-3xl md:text-4xl font-semibold text-gray-800' 
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            Why Choose Us
                        </motion.h2>
                        <motion.p 
                            className='text-lg md:text-xl text-gray-700' 
                            initial={{ opacity: 0, x: 50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            AutoGenius offers numerous advantages over existing systems, including enhanced user interaction, structured data input, and verified expert involvement. Our platform's combination of community-driven content, expert verification, and a structured approach to problem-solving makes it a valuable addition to the automotive domain.
                        </motion.p>
                        <motion.h2 
                            className='text-3xl md:text-4xl font-semibold text-gray-800' 
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            Our Vision
                        </motion.h2>
                        <motion.p 
                            className='text-lg md:text-xl text-gray-700' 
                            initial={{ opacity: 0, x: 50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Our vision is to create a world where vehicle owners feel empowered and confident in maintaining and repairing their vehicles. We aim to foster a community where knowledge is shared freely, and everyone, regardless of their technical expertise, can find the support they need. Through continuous innovation and dedication, AutoGenius seeks to become the go-to platform for all automotive needs.
                        </motion.p>
                        <motion.h2 
                            className='text-3xl md:text-4xl font-semibold text-gray-800' 
                            initial={{ opacity: 0, x: -50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            Join Us
                        </motion.h2>
                        <motion.p 
                            className='text-lg md:text-xl text-gray-700' 
                            initial={{ opacity: 0, x: 50 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Join the AutoGenius community today and start your journey towards mastering automotive maintenance and repair. Whether you’re a seasoned mechanic or a car owner with little technical knowledge, AutoGenius has something to offer. Let’s revolutionize the automotive world together.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default About;
