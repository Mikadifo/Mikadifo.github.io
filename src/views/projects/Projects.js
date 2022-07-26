import ProjectCard from '../../components/cards/ProjectCard';
import projects from './../../resources/data/projects.json';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="p-5" data-testid="projects">
            <h1 className="text-center pt-3 pb-5 projects-title">PROJECTS</h1>
            <div className="row align-items-center justify-content-center">
                {projects.map((project) => (
                    <div
                        className="col col-lg-6 col-xl-4 col-md-6 col-12 d-flex align-items-center justify-content-center"
                        key={project.id}
                        data-testid={project.id}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
