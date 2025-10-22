import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Attendance from '../Attendance';
import Payrol from '../Payrol';
import Dashboard from '../Applicant/Dashboard';
import HomeLayout from '../HomeLayout';
import Application from '../Applicant/Application';
import Login from '../Login';
import Register from '../Register';
import SetPassword from '../SetPassword';
import VerifyOtp from '../VerifyOtp';
// import Login from '../Login';
// import Register from '../Register';

const RPRoutes = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Public routes */}
            <Route path="/" element={<Login />} /> 
            <Route path="/register" element={<Register />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="" element={<HomeLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/attend" element={<Attendance />} />
                <Route path="/payroll" element={<Payrol />} />
                <Route path="/apply" element={<Application />} />
            </Route>


        </>
    )
);
export default RPRoutes;






