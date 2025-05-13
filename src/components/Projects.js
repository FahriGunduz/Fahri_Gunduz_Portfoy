import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const myPortfolioProjects = [
    {
        id: 1,
        title: 'GameJam Oyunu - Birincilik',
        description: 'Balıkesir Teknokent\'in düzenlediği GameJam etkinliğinde birinci olan oyun projem. Unity oyun motoru kullanılarak 48 saatlik bir süreçte geliştirildi.',
        imageUrl: '/images/vortex-9.png',
        techStack: ['Unity', 'C#'],
    },
    {
        id: 2,
        title: 'Teknofest Mobil Uygulama (MİSYA Kaptanı)',
        description: 'Balıkesir Üniversitesi MİSYA Topluluğu mobil ekibi kaptanı olarak Teknofest için geliştirmekte olduğumuz proje. (Detaylar ve sonuçlar eklenecek)',
        imageUrl: '/images/logo.png',
        techStack: ['Flutter', 'Dart', 'Firebase'],
    },
    {
        id: 3,
        title: 'Kişisel Portföy Websitesi',
        description: 'Şu anda incelemekte olduğunuz, React ile fütüristik bir tasarımla geliştirilmiş kişisel portföy sitem.',
        imageUrl: '/images/logo1.png',
        techStack: ['React', 'JavaScript', 'CSS', 'HTML'],
        liveUrl: '#',
        codeUrl: '',
    },
    {
        id: 4,
        title: 'Soru Bankası',
        description: 'Şu anda incelemekte olduğunuz, QtDesigner ile tasarlanmış ve python pyqt5 kütüphanesinden yararlanarak yaptığım sorubankasından soru seçerek kendi çalışma kağıdımızı hazırlayabildiğimiz bir uygulama.',
        imageUrl: '/images/sorubankası.png',
        techStack: ['Python','Qt Designer','Pyqt5','Excel'],
        codeUrl: 'https://github.com/FahriGunduz/Sorubankasi.git',
    },
    {
        id: 5,
        title: 'NotPad',
        description: 'Şu anda incelemekte olduğunuz, QtDesigner ile tasarlanmış ve python pyqt5 kütüphanesinden yararlanarak yaptığım basit bir metin yazma ve düzenleme uygulaması.',
        imageUrl: '/images/notpad.png',
        techStack: ['Python','Qt Designer','Pyqt5'],
        codeUrl: 'https://github.com/FahriGunduz/NotPad.git',
    },
    {
        id: 6,
        title: 'Yemek Tarif Kitabı',
        description: 'Şu anda incelemekte olduğunuz, QtDesigner ile tasarlanmış ve python pyqt5 kütüphanesinden yararlanarak yaptığım veritabanındaki tariflere erişip kendinizde yeni tarifler ekleyip ve silebildiğiniz bir yemek tarif kitabı uygulaması',
        imageUrl: '/images/yemektarifikitabı.png',
        techStack: ['Python','Qt Designer','Pyqt5','SQLite'],
        codeUrl: 'https://github.com/FahriGunduz/YemekTarifiUygulamasi.git',
    },
];

function Projects() {
    if (!myPortfolioProjects || myPortfolioProjects.length === 0) {
        return (
            <section id="projects" className="projects-section">
                <h2>Projelerim</h2>
                <p className="projects-empty-message">Yakında burada sergilenecek daha fazla projem olacak!</p>
            </section>
        );
    }

    return (
        <section id="projects" className="projects-section">
            <h2>Projelerim</h2>
            <div className="projects-grid">
                {myPortfolioProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;