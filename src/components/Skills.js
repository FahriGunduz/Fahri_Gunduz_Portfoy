import React from 'react';
import './Skills.css';

const technicalSkills = [
    { name: 'Flutter', level: 90 },
    { name: 'Dart', level: 85 },
    { name: 'Java', level: 75 },
    { name: 'Unity', level: 80 },
    { name: 'C#', level: 78 },
    { name: 'Python', level: 70 },
    { name: 'React', level: 65 },
    { name: 'HTML & CSS', level: 80 },
    { name: 'JavaScript', level: 70 },
];

const languages = [
    { name: 'Türkçe', level: 'Ana Dil' },
    { name: 'İngilizce', level: 'İyi Seviye' },
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>Yeteneklerim</h2>
            <div className="skills-container">
                <div className="skills-category">
                    <h3>Teknik Beceriler</h3>
                    <div className="skills-list">
                        {technicalSkills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Diller</h3>
                    <div className="skills-list">
                        {languages.map((lang, index) => (
                            <div key={index} className="skill-item">
                                <span className="skill-name">{lang.name}</span>
                                <span className="skill-language-level">({lang.level})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;