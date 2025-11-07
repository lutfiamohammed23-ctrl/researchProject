import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRoles = [] }) => {
  const location = useLocation();

  // Get stored auth data
  const accessToken = localStorage.getItem("accessToken");
  const userRole = localStorage.getItem("role");

  // Basic token check
  if (!accessToken) {
    console.log("No access token found, redirecting to login");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Check role-based access if roles are specified
  if (requiredRoles.length > 0) {
    if (!userRole) {
      console.log("No user role found");
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (!requiredRoles.includes(userRole)) {
      console.log(`Access denied - Required roles: ${requiredRoles.join(', ')}, User role: ${userRole}`);
      return (
        <div className="container mt-5 text-center">
          <h2>Access Denied</h2>
          <p>You don't have permission to access this page.</p>
          <p>Required roles: {requiredRoles.join(', ')}</p>
          <p>Your role: {userRole}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Go to Dashboard
          </button>
        </div>
      );
    }
  }

  // If all checks pass, render the protected content
  console.log(`Access granted - User authenticated with role: ${userRole}`);
  return children;
};

export default ProtectedRoute;
