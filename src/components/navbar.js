import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <Link to="/"> 
                    <img 
                        src="https://simplyfi-website.s3.ap-south-1.amazonaws.com/images/logo/logo.png" 
                        alt="Logo" 
                        className="navbar-logo"
                    />

</Link>


                </div>

                <button 
                    className="navbar-toggle" 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link 
                            to="/" 
                            className="navbar-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className="navbar-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/services" 
                            className="navbar-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className="navbar-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;