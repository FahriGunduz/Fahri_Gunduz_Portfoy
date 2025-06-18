import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    const [isMenuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <nav className="navbar">
            <HashLink smooth to="/#home" className="navbar-logo-link" onClick={toggleMenu}>
                <img src="/images/logo.jpg" alt="Salamander Logo" className="navbar-logo-img" />
                <span className="navbar-brand-text">Fahri Gündüz</span>
            </HashLink>

            <div className={`navbar-toggle ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-nav ${isMenuActive ? 'active' : ''}`}>
                <li className="nav-item"><HashLink smooth to="/#home" className="nav-link" onClick={toggleMenu}>Anasayfa</HashLink></li>
                <li className="nav-item"><HashLink smooth to="/#about" className="nav-link" onClick={toggleMenu}>Hakkımda</HashLink></li>
                <li className="nav-item"><HashLink smooth to="/#projects" className="nav-link" onClick={toggleMenu}>Projelerim</HashLink></li>
                <li className="nav-item"><HashLink smooth to="/#skills" className="nav-link" onClick={toggleMenu}>Yeteneklerim</HashLink></li>
                <li className="nav-item"><HashLink smooth to="/#contact" className="nav-link" onClick={toggleMenu}>İletişim</HashLink></li>
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
