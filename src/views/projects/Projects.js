import ProjectCard from '../../components/cards/ProjectCard';
import projects from './../../resources/data/projects.json';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" data-testid="projects">
            <div className="project-bg justify-content-center d-flex">
                <div className="project-container">
                    <h1 className="text-center projects-title">My Work</h1>
                    <ProjectCard project={projects[0]} />
                    <div className="slider-controls">SOME Moving controls</div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
