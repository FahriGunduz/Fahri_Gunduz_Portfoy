
import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="/images/logo.jpg" alt="Salamander Logo - Footer" className="footer-logo-img" /> {/* EKLENDİ */}
                <div className="footer-social-links">
                    {/* ... sosyal medya linkleri ... */}
                </div>
                <p className="footer-copyright">&copy; {currentYear} Fahri Gündüz. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
}

export default Footer;