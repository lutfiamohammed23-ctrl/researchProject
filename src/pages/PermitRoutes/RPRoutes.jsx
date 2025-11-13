// import React from 'react';
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import Attendance from '../Attendance';
// import Payrol from '../Payrol';
// import Dashboard from '../Applicant/Dashboard';
// import HomeLayout from '../HomeLayout';
// import Application from '../Applicant/Application';
// import Login from '../Login';
// import Register from '../Register';
// import SetPassword from '../SetPassword';
// import VerifyOtp from '../VerifyOtp';
// import DashboardVpo from '../VPO/DashboardVpo';
// // import Login from '../Login';
// // import Register from '../Register';

// const RPRoutes = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             {/* Public routes */}
//             <Route path="/" element={<Login />} /> 
//             <Route path="/register" element={<Register />} />
//             <Route path="/set-password" element={<SetPassword />} />
//             <Route path="/verify-otp" element={<VerifyOtp />} />
//             <Route path="" element={<HomeLayout />}>
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/attend" element={<Attendance />} />
//                 <Route path="/payroll" element={<Payrol />} />
//                 <Route path="/apply" element={<Application />} />
//                 <Route path='/dashboardVpo' element={<DashboardVpo/>}/>
//             </Route>


//         </>
//     )
// );
// export default RPRoutes;


import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Attendance from "../Attendance";
import Payrol from "../Payrol";
import Dashboard from "../Applicant/Dashboard";
import HomeLayout from "../HomeLayout";
import Application from "../Applicant/Application";
import Login from "../Login";
import Register from "../Register";
import SetPassword from "../SetPassword";
import VerifyOtp from "../VerifyOtp";
import DashboardVpo from "../VPO/DashboardVpo";
import ProtectedRoute from "./ProtectedRoutes";
// import ProtectedRoute from "../components/ProtectedRoute";

const RPRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />

      {/* Protected routes */}
      <Route element={<HomeLayout />}>
        {/* Applicant routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRoles={["APPLICANT", "ADMIN"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attend"
          element={
            <ProtectedRoute requiredRoles={["APPLICANT", "ADMIN"]}>
              <Attendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payroll"
          element={
            <ProtectedRoute requiredRoles={["APPLICANT", "ADMIN", "FINANCE"]}>
              <Payrol />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply"
          element={
            <ProtectedRoute requiredRoles={["APPLICANT"]}>
              <Application />
            </ProtectedRoute>
          }
        />
        
        {/* VPO routes */}
        <Route
          path="/dashboardVpo"
          element={
            <ProtectedRoute requiredRoles={["VPO", "ADMIN","APPLICANT"]}>
              <DashboardVpo />
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  )
);

export default RPRoutes;




