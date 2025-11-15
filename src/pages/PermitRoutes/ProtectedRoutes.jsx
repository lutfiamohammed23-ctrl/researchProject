// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children, requiredRoles = [] }) => {
//   const location = useLocation();

//   const accessToken = localStorage.getItem("accessToken");

//   // Retrieve roles from localStorage
//   let userRoles = [];
//   try {
//     const storedRoles = localStorage.getItem("roles");
//     if (storedRoles) {
//       userRoles = JSON.parse(storedRoles);
//     }
//   } catch (err) {
//     console.error("Failed to parse user roles from localStorage:", err);
//   }

//   // If no token, redirect to login
//   if (!accessToken) {
//     console.log("No access token found, redirecting to login");
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   // Role-based access check
//   if (requiredRoles.length > 0) {
//     if (!userRoles.length) {
//       console.log("No user roles found");
//       return <Navigate to="/" state={{ from: location }} replace />;
//     }

//     // Check if user has at least one required role
//     const hasAccess = requiredRoles.some(role => userRoles.includes(role));
//     if (!hasAccess) {
//       console.log(
//         `Access denied - Required roles: ${requiredRoles.join(", ")}, User roles: ${userRoles.join(", ")}`
//       );
//       return (
//         <div className="container mt-5 text-center">
//           <h2>Access Denied</h2>
//           <p>You don't have permission to access this page.</p>
//           <p>Required roles: {requiredRoles.join(", ")}</p>
//           <p>Your roles: {userRoles.join(", ")}</p>
//           <button
//             className="btn btn-primary"
//             onClick={() => (window.location.href = "/dashboard")}
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       );
//     }
//   }

//   console.log(`Access granted - User authenticated with roles: ${userRoles.join(", ")}`);
//   return children;
// };

// export default ProtectedRoute;


// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children, requiredRoles = [] }) => {
//   const location = useLocation();

//   const accessToken = localStorage.getItem("accessToken");

//   // Get roles from localStorage
//   let userRoles = [];
//   try {
//     const storedRoles = localStorage.getItem("roles");
//     if (storedRoles) {
//       userRoles = JSON.parse(storedRoles);
//     }
//   } catch (err) {
//     console.error("Failed to parse user roles from localStorage:", err);
//   }

//   // Redirect if no token
//   if (!accessToken) {
//     console.log("No access token found, redirecting to login");
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   // Role-based access check
//   if (requiredRoles.length > 0) {
//     if (!userRoles.length) {
//       console.log("No user roles found");
//       return <Navigate to="/" state={{ from: location }} replace />;
//     }

//     const hasAccess = requiredRoles.some(role => userRoles.includes(role));
//     if (!hasAccess) {
//       console.log(
//         `Access denied - Required roles: ${requiredRoles.join(", ")}, User roles: ${userRoles.join(", ")}`
//       );
//       return (
//         <div className="container mt-5 text-center">
//           <h2>Access Denied</h2>
//           <p>You don't have permission to access this page.</p>
//           <p>Required roles: {requiredRoles.join(", ")}</p>
//           <p>Your roles: {userRoles.join(", ")}</p>
//           <button
//             className="btn btn-primary"
//             onClick={() => (window.location.href = "/dashboard")}
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       );
//     }
//   }

//   console.log(`Access granted - User authenticated with roles: ${userRoles.join(", ")}`);
//   return children;
// };

// export default ProtectedRoute;



import React from "react"; 
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRoles = [] }) => {
  const location = useLocation();

  const accessToken = localStorage.getItem("accessToken");

  // Get roles from localStorage
  let userRoles = [];
  try {
    const storedRoles = localStorage.getItem("roles");
    if (storedRoles) {
      userRoles = JSON.parse(storedRoles); // Expecting ["APPLICANT", ...]
      if (!Array.isArray(userRoles)) userRoles = [];
    }
  } catch (err) {
    console.error("Failed to parse roles from localStorage:", err);
  }

  // Redirect if not logged in
  if (!accessToken) {
    console.warn("No access token found, redirecting to login");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Role-based access check
  if (requiredRoles.length > 0) {
    const hasAccess = requiredRoles.some(role => userRoles.includes(role));

    if (!hasAccess) {
      console.warn(
        `Access denied - Required roles: [${requiredRoles.join(", ")}], User roles: [${userRoles.join(", ")}]`
      );
      return (
        <div className="container mt-5 text-center">
          <h2>Access Denied</h2>
          <p>You don't have permission to access this page.</p>
          <p>Required roles: {requiredRoles.join(", ")}</p>
          <p>Your roles: {userRoles.join(", ") || "None"}</p>
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Go to Dashboard
          </button>
        </div>
      );
    }
  }

  // Authenticated and authorized
  console.log(`Access granted - User roles: [${userRoles.join(", ")}]`);
  return children;
};

export default ProtectedRoute;