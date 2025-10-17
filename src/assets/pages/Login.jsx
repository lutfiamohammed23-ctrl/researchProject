import { useContext, useState } from "react";
// import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { AuthContext } from "./context/AuthContext";

export default function Login() {
    const {login} =useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit=async(e)=>{
        e.preventDefault();
        try{
            await login(email,password);
            navigate("/dashboard");
        }catch(err){
            console.error("Login failed:", err);
            alert("Login failed. Please check your credentials and try again.");
        }
    }
    
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}> 
            
                <div className="card shadow p-4" style={{ width: "30%", minWidth: "320px", borderRadius: "1rem" }}>
                    <div className="card-body">
                        <div className="pt-2 pb-2">
                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                            <p className="text-center small">
                                Enter your username &amp; password to login
                            </p>
                        </div>

                        <form className="row g-3 needs-validation" noValidate onSubmit={(e)=>handleLoginSubmit(e)}>
                            <div className="col-12">
                                <label htmlFor="yourUsername" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="email" name="email" className="form-control" id="yourUsername" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                    
                                    <div className="invalid-feedback">
                                        Please enter your username.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="yourPassword"  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                                <div className="invalid-feedback">
                                    Please enter your password!
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="remember" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100" type="submit">
                                    Login
                                </button>
                            </div>

                            <div className="col-12 text-center">
                                <p className="small mb-0">
                                    Don’t have an account?{" "}
                                    <Link to="/register">Create an account</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
