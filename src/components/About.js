import React from 'react';
import './About.css';
function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2>Hakkımda</h2>
                <div className="about-content-grid">
                    <div className="about-text">
                        <p>
                            Ben Fahri Gündüz, 2004 yılında Denizli'de doğdum. Yazılıma küçüklüğümden beri ilgi duyuyor ve
                            bu alanda kendimi sürekli geliştirmeye çalışıyorum. Problem çözmeyi, yeni teknolojiler öğrenmeyi ve
                            öğrendiklerimi yaratıcı projelerde kullanmayı seviyorum.
                        </p>
                        <p>
                            Takım çalışmasına yatkınım ve farklı disiplinlerden insanlarla birlikte çalışarak
                            ortak hedeflere ulaşmaktan keyif alırım.
                        </p>
                    </div>
                    <div className="education-section">
                        <h3>Eğitim</h3>
                        <div className="education-item">
                            <h4>Balıkesir Üniversitesi</h4>
                            <p className="education-degree">Bilgisayar Mühendisliği</p>
                            <p className="education-duration">(2023 - Devam Ediyor)</p>
                        </div>
                        <div className="education-item">
                            <h4>Özay Gönlüm Fen Lisesi</h4>
                            <p className="education-duration">(2018 - 2022)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;