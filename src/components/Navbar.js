import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" className="navbar-logo-link">
                <img src="/images/logo.jpg" alt="Salamander Logo" className="navbar-logo-img" />
                <span className="navbar-brand-text">Fahri Gündüz</span>
            </a>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="#about" className="nav-link">Hakkımda</a></li>
                <li className="nav-item"><a href="#projects" className="nav-link">Projelerim</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link">Yeteneklerim</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">İletişim</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;