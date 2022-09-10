import { useState } from 'react';
import BorderlessButton from '../../components/buttons/BorderlessButton/BorderlessButton';
import ProjectCard from '../../components/cards/ProjectCard';
import projects from './../../resources/data/projects.json';
import './Projects.css';

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);

    return (
        <div id="projects" data-testid="projects">
            <div
                className="project-bg justify-content-center d-flex"
                style={{
                    backgroundImage: `linear-gradient(0.25turn, #${projects[currentProject].colors[0]}, #${projects[currentProject].colors[1]})`,
                }}
            >
                <div className="project-container">
                    <h1 className="text-center projects-title">My Work</h1>
                    <ProjectCard project={projects[currentProject]} />
                    <div className="row slider-controls">
                        <div className="col-sm-4 col-6">
                            <BorderlessButton
                                text={'Previous'}
                                textClass={'d-none d-sm-inline'}
                                iconClass={'bi bi-arrow-left-circle'}
                                hoverIconClass={'bi bi-arrow-left-circle-fill'}
                                action={() =>
                                    currentProject > 0 &&
                                    setCurrentProject(currentProject - 1)
                                }
                                disabled={currentProject <= 0}
                            />
                        </div>
                        <div className="col-sm-4 text-center p-0 my-auto project-tools order-last">
                            {projects[currentProject].tools}
                        </div>
                        <div className="col-sm-4 col-6 text-end order-sm-last">
                            <BorderlessButton
                                text={'Next'}
                                textClass={'d-none d-sm-inline'}
                                iconClass={'bi bi-arrow-right-circle'}
                                hoverIconClass={'bi bi-arrow-right-circle-fill'}
                                iconToEnd={true}
                                action={() =>
                                    currentProject < projects.length - 1 &&
                                    setCurrentProject(currentProject + 1)
                                }
                                disabled={currentProject >= projects.length - 1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
