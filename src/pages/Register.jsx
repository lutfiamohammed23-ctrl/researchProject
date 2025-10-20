// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// // export default function Register() {
// const Register = () => {

//     const navigate = useNavigate();

//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [address, setAddress] = useState('');
//     const [role, setRole] = useState('');

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:8088/api/auth/register", {
//                 firstName: firstname,
//                 lastName: lastname,
//                 username,
//                 email,
//                 address,
//                 role
//             });

//             console.log("Registration successful:", res.data);

//             // Inform user to check email for verification
//             alert("Registration successful! Please check your email to set your password.");

//             // Reset form
//             setFirstname('');
//             setLastname('');
//             setEmail('');
//             setUsername('');
//             setAddress('');
//             setRole('');

//             navigate("/"); // optionally redirect to login page
//         } catch (error) {
//             console.error("Registration failed:", error.response?.data || error.message);
//             alert("Registration failed. " + (error.response?.data?.message || ""));
//         }
//     };

//     return (
//         <>

//             <main>
//                 <div className="container">
//                     <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                         <div className="container">
//                             <div className="row justify-content-center">
//                                 <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                                     {/* <div className="d-flex justify-content-center py-4">
//                                         <a href="index.html" className="logo d-flex align-items-center w-auto">
//                                             <img src="assets/img/logo.png" alt />
//                                             <span className="d-none d-lg-block">NiceAdmin</span>
//                                         </a>
//                                     </div>End Logo */}
//                                     <div className="card mb-3">
//                                         <div className="card-body">
//                                             <div className="pt-4 pb-2">
//                                                 <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
//                                                 <p className="text-center small">Enter your personal details to create account</p>
//                                             </div>
//                                             <form className="row g-3 needs-validation" noValidate onSubmit={(e) => handleFormSubmit(e)}>
//                                                 <div className="col-12">
//                                                     <label htmlFor="yourName" className="form-label">Your Firstname</label>
//                                                     {/* <input onChange={(e)=> setFormData({...formData, firstname: e.target.value})} type="text" name="name" className="form-control" id="yourName" required /> */}
//                                                     <input onChange={(e) => setFirstname(e.target.value)} value={firstname} type="text" name="firstname" className="form-control" id="firstname" required />
//                                                     <div className="invalid-feedback">Firstname</div>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="yourEmail" className="form-label">Your Lastname</label>
//                                                     {/* <input onChange={(e)=> setFormData({...formData, lastname: e.target.value})} type="email" name="email" className="form-control" id="yourEmail" required /> */}
//                                                     <input onChange={(e) => setLastname(e.target.value)} value={lastname} type="text" name="lastname" className="form-control" id="lastname" required />
//                                                     <div className="invalid-feedback">Lastname</div>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="yourUsername" className="form-label">Email</label>
//                                                     <div className="input-group has-validation">
//                                                         <span className="input-group-text" id="inputGroupPrepend">@</span>
//                                                         <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" className="form-control" id="email" required />
//                                                         <div className="invalid-feedback">Email</div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="yourAddress" className="form-label">Address</label>
//                                                     {/* <input onChange={(e)=> setFormData({...formData, lastname: e.target.value})} type="email" name="email" className="form-control" id="yourEmail" required /> */}
//                                                     <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" name="address" className="form-control" id="address" required />
//                                                     <div className="invalid-feedback">Address</div>
//                                                 </div>
//                                                 {/* <div className="col-12">
//                                                     <label htmlFor="yourPassword" className="form-label">Password</label>
//                                                     <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" className="form-control" id="password" required />
//                                                     <div className="invalid-feedback">Password</div>
//                                                 </div> */}
//                                                 <div className="col-12">
//                                                     <label htmlFor="yourPassword" className="form-label">Username</label>
//                                                     <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" className="form-control" id="username" required />
//                                                     <div className="invalid-feedback">Username</div>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="role" className="form-label">Role</label>
//                                                     <select
//                                                         id="role"
//                                                         className="form-select"
//                                                         value={role}
//                                                         onChange={(e) => setRole(e.target.value)}
//                                                     >
//                                                         <option value="">Select role (default: APPLICANT)</option>
//                                                         <option value="APPLICANT">Applicant</option>
//                                                         <option value="ADMIN">Admin</option>
//                                                         <option value="REVIEWER">Reviewer</option>
//                                                     </select>
//                                                 </div>

//                                                 {/* <div className="col-12">
//                                                     <div className="form-check">
//                                                         <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
//                                                         <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
//                                                         <div className="invalid-feedback">You must agree before submitting.</div>
//                                                     </div>
//                                                 </div> */}
//                                                 <div className="col-12">
//                                                     <button className="btn btn-primary w-100" type="submit">Create Account</button>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <p className="small mb-0"> Already  have an account? please{" "} <Link to="/">Login </Link></p>                                                </div>
//                                             </form>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//             {/* Husna123@ */}


//         </>
//     )
// }
// export default Register;
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
  const [role, setRole] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8088/api/auth/register", {
        firstName: firstname,
        lastName: lastname,
        username,
        email,
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
      setRole('');

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
