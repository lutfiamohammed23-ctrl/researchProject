import React, { useEffect, useState } from 'react';



const Header = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');

    const toggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    useEffect(() => {
        // Get user first name from localStorage
        const storedFName = localStorage.getItem('firstName');
        const storedLName = localStorage.getItem('lastName');
        const storedEmail = localStorage.getItem('email');


        if (storedFName && storedLName && storedEmail) {
            setFirstName(storedFName);
            setlastName(storedLName);
            setlastName(storedEmail);
        }

        const selectHeader = document.querySelector('#header');
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled');
            } else {
                selectHeader.classList.remove('header-scrolled');
            }
        };

        window.addEventListener('scroll', headerScrolled);
        window.addEventListener('load', headerScrolled);

        return () => {
            window.removeEventListener('scroll', headerScrolled);
            window.removeEventListener('load', headerScrolled);
        };
    }, []);





    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt />
                    <span className="d-none d-lg-block">Research Permit</span>
                </a>
                {/* <i className="bi bi-list toggle-sidebar-btn" /> */}
                <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
            </div>{/* End Logo */}
            <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                    <button type="submit" title="Search"><i className="bi bi-search" /></button>
                </form>
            </div>{/* End Search Bar */}
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="#">
                            <i className="bi bi-search" />
                        </a>
                    </li>{/* End Search Icon*/}

                    <li className="nav-item dropdown pe-3">
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                                    <i className="bi bi-person" style={{fontSize:"28px"}}/>
                            
                            {/* <span className="d-none d-md-block dropdown-toggle ps-2">{firstName} {lastName}</span> */}
                            <span className="d-none d-md-block dropdown-toggle ps-2">{email}</span>
                        </a>{/* End Profile Iamge Icon */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile" style={{}}>
                            <li className="dropdown-header">
                                {/* <h6>Kevin Anderson</h6> */}
                                <h6>{firstName}</h6>
                                <span>Web Designer</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i className="bi bi-person" />
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i className="bi bi-gear" />
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                    <i className="bi bi-question-circle" />
                                    <span>Need Help?</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <i className="bi bi-box-arrow-right" />
                                    <span>Sign Out</span>
                                </a>
                            </li>
                        </ul>{/* End Profile Dropdown Items */}
                    </li>{/* End Profile Nav */}
                </ul>
            </nav>{/* End Icons Navigation */}
        </header>

    );
}

export default Header;
