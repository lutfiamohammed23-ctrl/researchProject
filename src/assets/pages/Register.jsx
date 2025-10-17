import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export default function Register() {

    const {register} = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
    });
    const handleFormSubmit=async(e)=>{
        e.preventDefault();
        try{
            await register(formData.username, formData.email, formData.password, formData.firstname, formData.lastname);
            navigate("/");
        }catch(err){
            console.error("Registration failed:", err.message);
            alert("Registration failed. Please try again.");
        }
    }
    return (
        <>

            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    {/* <div className="d-flex justify-content-center py-4">
                                        <a href="index.html" className="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt />
                                            <span className="d-none d-lg-block">NiceAdmin</span>
                                        </a>
                                    </div>End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                <p className="text-center small">Enter your personal details to create account</p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate onSubmit={(e)=>handleFormSubmit(e)}>
                                                <div className="col-12">
                                                    <label htmlFor="yourName" className="form-label">Your Firstname</label>
                                                    <input onChange={(e)=> setFormData({...formData, firstname: e.target.value})} type="text" name="name" className="form-control" id="yourName" required />
                                                    <div className="invalid-feedback">Firstname</div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">Your Lastname</label>
                                                    <input onChange={(e)=> setFormData({...formData, lastname: e.target.value})} type="email" name="email" className="form-control" id="yourEmail" required />
                                                    <div className="invalid-feedback">Lastname</div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input onChange={(e)=> setFormData({...formData, firstname: e.target.value})} type="text" name="username" className="form-control" id="yourUsername" required />
                                                        <div className="invalid-feedback">Username</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                                    <input onChange={(e)=> setFormData({...formData, password: e.target.value})} type="password" name="password" className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Password</div>
                                                </div>
                                                {/* Luty123@ */}
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Email</label>
                                                    <input onChange={(e)=> setFormData({...formData, email: e.target.value})} type="password" name="password" className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Email</div>
                                                </div>
                                                {/* <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
                                                        <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                        <div className="invalid-feedback">You must agree before submitting.</div>
                                                    </div>
                                                </div> */}
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0"> Already  have an account? please{" "} <Link to="/">Login </Link></p>                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            

        </>
    )
}