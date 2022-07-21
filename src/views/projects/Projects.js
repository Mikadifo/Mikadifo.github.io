import ProjectCard from '../../components/cards/ProjectCard';
import projects from './../../resources/data/projects.json';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="p-5">
            <h1 className="text-center pt-3 pb-5 projects-title">Projects</h1>
            <div className="row align-items-center justify-content-center">
                {projects.map((project) => (
                    <div
                        className="col col-lg-4 col-md-8 col-12"
                        key={project.id}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
