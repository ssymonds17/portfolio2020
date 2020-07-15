import React from 'react';
import '../styles/components/projectsDisplay.scss';
import projectData from '../data/projectData.json';
import ProjectItem from './projectItem';

const ProjectsDisplay = () => {

 return (
  projectData.map(
   (project) => (
    <ProjectItem project={project} key={project.key} />
   )
  )
 )
}

export default ProjectsDisplay