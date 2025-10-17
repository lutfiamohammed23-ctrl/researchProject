import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Attendance from "../Attendance";
import Payrol from "../Payrol";
import Dashboard from "../Applicant/Dashboard";
import HomeLayout from "../HomeLayout";
import Application from "../Applicant/Application";
import Login from "../Login";
import Register from "../Register";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<HomeLayout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/attend"
          element={
            <ProtectedRoutes>
              <Attendance />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/payroll"
          element={
            <ProtectedRoutes>
              <Payrol />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/apply"
          element={
            <ProtectedRoutes>
              <Application />
            </ProtectedRoutes>
          }
        />
      </Route>
    </>
  )
);

export default function RPRoutes() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
