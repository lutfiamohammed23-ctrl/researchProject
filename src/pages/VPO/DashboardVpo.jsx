// import { Button, Modal, Table } from 'antd';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

const Dashboard = () => {

    return (
        <>
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    {/* Left side columns */}
                    <div className="col-lg-12">
                        <div className="row">
                            {/* Sales Card */}
                            <div className="col-xxl-3 col-md-6">
                                <div className="card info-card sales-card">
                                    <div className="filter">
                                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Today</a></li>
                                            <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Sales <span>| Today</span></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-cart" />
                                            </div>
                                            <div className="ps-3">
                                                <h6>145</h6>
                                                <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Sales Card */}
                            {/* Revenue Card */}
                            <div className="col-xxl-3 col-md-6">
                                <div className="card info-card revenue-card">
                                    <div className="filter">
                                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Today</a></li>
                                            <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Revenue <span>| This Month</span></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-currency-dollar" />
                                            </div>
                                            <div className="ps-3">
                                                <h6>$3,264</h6>
                                                <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Revenue Card */}
                            {/* Customers Card */}
                            <div className="col-xxl-3 col-xl-12">
                                <div className="card info-card customers-card">
                                    <div className="filter">
                                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Today</a></li>
                                            <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Customers <span>| This Year</span></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-people" />
                                            </div>
                                            <div className="ps-3">
                                                <h6>1244</h6>
                                                <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Customers Card */}
                            <div className="col-xxl-3 col-xl-12">
                                <div className="card info-card customers-card">
                                    <div className="filter">
                                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Today</a></li>
                                            <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Customers <span>| This Year</span></h5>
                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-people" />
                                            </div>
                                            <div className="ps-3">
                                                <h6>1244</h6>
                                                <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Customers Card */}
                            {/* Reports */}



                        </div>
                    </div>{/* End Left side columns */}


                </div>

            </section>
            {/* </div> */}



            <div className="card">
                <div className="card-body">
                    <br />
                    <form className="row g-3">
                        {/* Applicant Information */}


                        <h2 className="sub-title fs-1">Applicant Information</h2><hr />
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Lutfia Ali' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Mohammed' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Email' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Phone Number </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Phone Number' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Date Of Birth </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Date Of Birth' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Passport Number</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Passport Number ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Gender</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Gender' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Selected Nation</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Select Nation' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>National Id</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='National Id' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Address </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Address ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>City</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='City ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Country </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Country ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Postal Code</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Postal Code ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Institution</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder='Institution' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Position </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Position ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Department </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Department ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>




                        <h2 className="sub-title fs-1">Research Information</h2><hr />

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Tittle </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Tittle ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Description </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Description ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Objectives </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Objectives ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Methodology </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Methodology ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Research Type </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Research Type ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Start Date </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Start Date ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> End Date </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' End Date ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Budget </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Budget ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Currency </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Currency ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Funding Source </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Funding Source ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Expected Outcomes </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Expected Outcomes ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Ethical Considerations </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Ethical Considerations ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Data Collection Methods </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Data Collection Methods ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Sample Size </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Sample Size ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>




                        <h2 className="sub-title fs-1">Application Information</h2><hr />

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}>Application No </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Application No ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Position </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Position ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Application Type </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Application Type ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Application Status </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Application Status ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Permit Number </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Permit Number ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Rejection Reason </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Rejection Reason ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={{ fontWeight: 'bold' }}> Officer Notes  </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" placeholder=' Officer Notes  ' readOnly style={{ border: 'none', outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }} />
                            </div>
                        </div>


                        <div class="text-center">
                            <button type="submit" className="btn btn-primary me-3" >Approved</button>
                            <button type="reset" className="btn btn-secondary" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>Reject</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    );
}

export default Dashboard;
