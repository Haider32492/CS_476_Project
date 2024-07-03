// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Profile from './pages/Profile';

import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import PostProblem from './pages/PostProblem';
import PostSolution from './pages/PostSolution';
import Results from './pages/Results';
import About from './pages/About';


const AppRouter = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/results" element={<Results />} />
                <Route path="/about" element={<About />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/postProblem" element={<PostProblem />} />
                <Route path="/postSolution" element={<PostSolution />} />

                <Route path="/" element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
