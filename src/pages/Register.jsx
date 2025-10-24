import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('APPLICANT'); // default role

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post("http://localhost:8080/api/auth/register", {
            const res = await axios.post("http://192.168.18.198:8080/api/auth/register", {
                username,
                email,
                firstName: firstname,
                lastName: lastname,
                address,
                role
            });

            console.log("Registration successful:", res.data);

            // Inform user to check email for verification
            alert("Registration successful! Please check your email to set your password.");

            // Reset form
            setFirstname('');
            setLastname('');
            setEmail('');
            setUsername('');
            setAddress('');
            setRole('APPLICANT');

            navigate("/"); // optionally redirect to login page
        } catch (error) {
            console.error("Registration failed:", error.response?.data || error.message);
            alert("Registration failed. " + (error.response?.data?.message || ""));
        }
    };

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p className="text-center small">Enter your personal details to create account</p>
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate onSubmit={handleFormSubmit}>
                                            <div className="col-12">
                                                <label className="form-label">Firstname</label>
                                                <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Lastname</label>
                                                <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Username</label>
                                                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Address</label>
                                                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Role</label>
                                                <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                                    <option value="">Select role (default: APPLICANT)</option>
                                                    <option value="APPLICANT">Applicant</option>
                                                    <option value="ADMIN">Admin</option>
                                                    <option value="REVIEWER">Reviewer</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                            </div>
                                            <div className="col-12 text-center">
                                                <p className="small mb-0">
                                                    Already have an account? <Link to="/">Login</Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Register;

// Summary of Flow

// User registers → backend sends email.

// Email contains http://localhost:3000/set-password?token=XYZ.

// User clicks link → browser opens React frontend.

// React Router sees /set-password → loads SetPassword page.

// User sets password → backend /api/auth/set-password updates DB.

// User is redirected to login page.

// Flow Summary
// Register- User fills form → backend creates inactive user → sends email.
// Email- User clicks /set-password?token=XYZ.
// Set Password- React opens SetPassword page.
// User sets password → backend validates token → account activated.
// Login- User redirected to login page → can now login.