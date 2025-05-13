import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>İletişime Geçin</h2>
            <div className="contact-container">
                <p className="contact-intro">
                    Projeler hakkında konuşmak, bir işbirliği teklif etmek veya sadece merhaba demek için
                    aşağıdaki bilgilerden bana ulaşabilirsiniz. Fikirlerinizi duymaktan mutluluk duyarım!
                </p>
                <div className="contact-details">
                    <div className="contact-item">
                        <i className="fas fa-envelope contact-icon"></i>
                        <a href="mailto:fahrii.gndz@gmail.com">fahrii.gndz@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone-alt contact-icon"></i> {/* fas fa-phone-alt daha modern olabilir */}
                        <a href="tel:+905541712788">+90 554 171 27 88</a>
                    </div>
                    {/* Opsiyonel: LinkedIn, GitHub gibi sosyal medya linkleri */}
                    <div className="contact-social-links">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        {/* Diğer sosyal medya linkleri */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;