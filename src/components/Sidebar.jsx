// import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/dashboard">
            <i className='bx bxs-dashboard'></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="attend">
            <i className="fa-solid fa-clipboard-user" style={{marginRight:"3px",fontSize:"18px"}}></i><span>Attendance</span>
          </Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="apply">
            <i className="fas fa-briefcase" style={{marginRight:"3px",fontSize:"18px"}}></i><span>Application</span>
          </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link collapsed" to="payroll">
            <i className="fas fa-sack-dollar" style={{marginRight:"3px",fontSize:"18px"}}></i><span>Payroll</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="dashboardVpo">
            <i className="fas fa-sack-dollar" style={{marginRight:"3px",fontSize:"18px"}}></i><span>VPO</span>
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link collapsed" to="perform">
            <i className="fas fa-chart-line" style={{marginRight:"3px",fontSize:"18px"}}></i><span>Performance</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="profile">
            <i className="bi bi-person" style={{marginRight:"3px",fontSize:"18px"}}></i>
            <span>Profile</span>
          </Link>
        </li> */}
{/* 
        <li className="nav-item">
          <Link className="nav-link collapsed" to="register">
            <i className="fa fa-clipboard-list" style={{marginRight:"3px",fontSize:"18px"}}></i> 
            <span>Register</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="login">
            <i className="bi bi-box-arrow-in-right" style={{marginRight:"3px",fontSize:"18px"}}></i>
            <span>Login</span>
          </Link>
        </li> */}


      </ul>

    </aside>
  );
}

export default Sidebar;
