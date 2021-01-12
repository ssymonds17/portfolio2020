import React from 'react';
import '../styles/components/projectItem.scss';

const ProjectItem = ({ project }) => {
  let imagePath = {
    nba: require('../images/nba-project.png'),
    draft: require('../images/nba-draft.png'),
    pokedex: require('../images/pokedex-app.png'),
    movie: require('../images/movie-reference-app.png'),
    meetup: require('../images/meetup-app.png'),
    todo: require('../images/todo-list-app.png'),
    quiz: require('../images/quiz-app.png')
  };

  let file = imagePath[project.key];

  return (
    <div className='project-item'>
      <div className='project-item-wrapper'>
        <div className='project-item-image-container'>
          <img className='project-item-image' src={file} alt={project.image} />
        </div>
        <div className='project-item-text-container'>
          <div className='project-item-lower'>
            <div className='project-item-lower-wrapper'>
              <div className='project-item-header'>
                <h2>{project.projectName}</h2>
                <p>{project.description}</p>
              </div>
              <div className='project-item-button-wrapper'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-item-button'
                >
                  Code
                </a>
                {project.applicationLink != null && (
                  <a
                    href={project.applicationLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-item-button'
                  >
                    Application
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
