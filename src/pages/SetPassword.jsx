import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const SetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get token from URL query params
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Validate token on mount
    useEffect(() => {
        if (!token) {
            setErrorMsg("Invalid link. Token is missing.");
        }
    }, [token]);

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setErrorMsg('');
        setSuccessMsg('');

        // Password confirmation check
        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match.");
            return;
        }

        try {
            // Send password + token to backend
            await axios.post("http://localhost:8080/api/auth/set-password", {
                token,
                password
            });

            setSuccessMsg("Password set successfully! Redirecting to login...");

            // Redirect to login page after short delay
            // setTimeout(() => navigate("/"), 2000);
            navigate("/");

        } catch (error) {
            console.error(error.response?.data || error.message);
            setErrorMsg(error.response?.data || "Failed to set password.");
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
            <div className="card shadow p-4" style={{ width: "30%", minWidth: "320px", borderRadius: "1rem" }}>
                <div className="card-body">
                    <div className="pt-2 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Set Your Password</h5>
                        <p className="text-center small">Enter your new password and confirm it</p>
                    </div>

                    {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                    {successMsg && <div className="alert alert-success">{successMsg}</div>}

                    <form className="row g-3 needs-validation" noValidate onSubmit={(e)=>handlePasswordSubmit(e)}>
                        <div className="col-12">
                            <label className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Confirm Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit">Save Password</button>
                        </div>
                        <div className="col-12 text-center">
                            <p className="small mb-0">
                                Don’t have an account? <Link to="/register">Create an account</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SetPassword;
// Amhar123@