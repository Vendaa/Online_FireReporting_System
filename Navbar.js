// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/fireform" className="nav-link">Fire Form</Link>
                </li>
                <li className="nav-item">
                    <Link to="/firetable" className="nav-link">Fire Table</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Signup</Link> {/* Add this link */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

