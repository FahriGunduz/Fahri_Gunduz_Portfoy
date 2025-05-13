import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Merhaba,</h1>
                    <h1> Ben Fahri Gündüz</h1>
                    <p>Bilgisayar Mühendisiyim. Yazılıma küçüklüğümden beri ilgi duyuyor ve bu alanda kendimi sürekli geliştirmeye çalışıyorum.</p>
                    <a href="#projects" className="cta-button">Çalışmalarıma Göz Atın</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;