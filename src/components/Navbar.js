import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <nav className="navbar">
            <a href="#home" className="navbar-logo-link">
                <img src="/images/logo.jpg" alt="Salamander Logo" className="navbar-logo-img" />
                <span className="navbar-brand-text">Fahri Gündüz</span>
            </a>

            <div className={`navbar-toggle ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-nav ${isMenuActive ? 'active' : ''}`}>
                <li className="nav-item"><a href="#about" className="nav-link" onClick={toggleMenu}>Hakkımda</a></li>
                <li className="nav-item"><a href="#projects" className="nav-link" onClick={toggleMenu}>Projelerim</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link" onClick={toggleMenu}>Yeteneklerim</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link" onClick={toggleMenu}>İletişim</a></li>
                <li className="nav-item">
                    <a
                        href="/Fahri_Gunduz_CV.pdf"
                        className="nav-link cv-download"
                        download="Fahri Gündüz CV.pdf"
                        onClick={toggleMenu}
                    >
                        CV İndir
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/quiz" className="nav-link" onClick={toggleMenu}>
                        Sınav
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
