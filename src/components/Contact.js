import React, { useState } from 'react';
import './Contact.css';
import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
    const socialLinks = {
        linkedin: 'https://www.linkedin.com/in/fahri-g%C3%BCnd%C3%BCz-fg2004/',
        github: 'https://github.com/FahriGunduz',
        instagram: 'https://www.instagram.com/fahri_gunduz00/'
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Gönderilen form:', formData);
        alert("Mesajınız gönderildi!");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <h2>İletişime Geçin</h2>
            <div className="contact-container">
                <p className="contact-intro">
                    Projeler hakkında konuşmak, bir işbirliği teklif etmek veya sadece merhaba demek için
                    aşağıdaki formdan bana ulaşabilirsiniz. Fikirlerinizi duymaktan mutluluk duyarım!
                </p>

                <div className="contact-social-links">
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <br/>


                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Mesaj Gönder</h3>

                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ad Soyad"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Mail adresiniz"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Mesajınız"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-button">
                        Gönder
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
