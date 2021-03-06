import React from 'react';
import '../styles/components/projects.scss';
import ProjectsDisplay from './projectsDisplay';

const Projects = () => {

  return (
    <section id="projects">
      <div className="projects">
        <div className="projects-header">
          <h3>Projects</h3>
          <p>
            A sample of the projects I completed
            while doing CareerFoundry's full stack web
            development course as well as independent projects
            carried out upon completion of the course.
          </p>
        </div>
        <div className="projects-grid">
          <ProjectsDisplay />
        </div>
      </div>
    </section>
  )
}

export default Projects