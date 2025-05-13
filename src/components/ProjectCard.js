import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            {project.imageUrl && (
                <div className="project-image-container">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                </div>
            )}
            <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.techStack && project.techStack.length > 0 && (
                    <div className="project-tech-stack">
                        <strong>Teknolojiler:</strong>
                        <ul className="tech-list">
                            {project.techStack.map((tech, index) => (
                                <li key={index} className="tech-item">{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="project-links">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                            Canlı Demo
                        </a>
                    )}
                    {project.codeUrl && (
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link code">
                            Kaynak Kodu
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;