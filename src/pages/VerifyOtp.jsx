import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const usernameOrEmail = location.state?.usernameOrEmail;

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!usernameOrEmail) {
      alert("Username/email missing. Please login again.");
      navigate("/");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://192.168.18.198:8080/api/auth/verify-otp", {
        usernameOrEmail,
        otp,
      });

      const { accessToken, refreshToken, user } = res.data;

      console.log("✅ Backend returned user:", user);

      // Save tokens
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Save user info
      localStorage.setItem("userId", user.id);
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("firstName", user.firstName);
      localStorage.setItem("lastName", user.lastName);

      // Save roles as JSON array
      if (user.roles && Array.isArray(user.roles)) {
        localStorage.setItem("roles", JSON.stringify(user.roles));
        console.log("✅ Roles stored in localStorage:", user.roles);
      } else {
        localStorage.setItem("roles", JSON.stringify([]));
        console.warn("⚠️ No roles found for user, stored empty array");
      }

      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("OTP verification failed:", error.response?.data || error.message);
      alert("OTP verification failed: " + (error.response?.data || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div className="card shadow p-4" style={{ width: "30%", minWidth: "320px", borderRadius: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center pb-0 fs-4">Verify OTP</h5>
          <p className="text-center small">Enter the OTP sent to your email</p>

          <form className="row g-3 needs-validation" noValidate onSubmit={handleVerifyOtp}>
            <div className="col-12">
              <label className="form-label">OTP</label>
              <input
                type="text"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            <div className="col-12">
              <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
