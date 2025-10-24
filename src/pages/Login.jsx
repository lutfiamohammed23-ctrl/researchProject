import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const res = await axios.post("http://localhost:8080/api/auth/login", {
      const res = await axios.post("http://192.168.18.198:8080/api/auth/login", {
        usernameOrEmail,
        password
      });

      // OTP sent, redirect to OTP page
      alert(res.data);
      navigate("/verify-otp", { state: { usernameOrEmail } });

    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed: " + (error.response?.data || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div className="card shadow p-4" style={{ width: "30%", minWidth: "320px", borderRadius: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
          <p className="text-center small">Enter your username & password</p>

          <form className="row g-3 needs-validation" noValidate onSubmit={handleLoginSubmit}>
            <div className="col-12">
              <label className="form-label">Email or Username</label>
              <input
                type="text"
                className="form-control"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
              />
            </div>

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
              <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                {loading ? "Sending OTP..." : "Login"}
              </button>
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
};

export default Login;


// Login.jsx → only sends OTP, no JWT yet.

// VerifyOtp.jsx → verifies OTP and stores JWT + user info in localStorage.

// Handles missing username/email gracefully.

// Proper loading indicators and alerts for UX.