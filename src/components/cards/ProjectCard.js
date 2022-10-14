import BorderlessButton from './../buttons/BorderlessButton/BorderlessButton';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card-project" data-testid={project.id}>
            <div className="row">
                <div className="col-md-4 p-0 text-center">
                    <img
                        src={project.img}
                        className="card-img-project"
                        alt={project.title}
                    />
                </div>
                <div className="col-md-8 project-description-container d-flex flex-column">
                    <p className="card-text mb-auto">
                        <b>{project.title}: </b>
                        {project.description}
                    </p>
                    <div className="row text-center pt-3">
                        <div className="col-6 pb-md-0 pb-3">
                            <a
                                href={project.link ? project.link : null}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="proj-link"
                            >
                                <BorderlessButton
                                    text={'Website'}
                                    textClass={'d-none d-sm-inline'}
                                    iconClass={'bi bi-display'}
                                    hoverIconClass={'bi bi-display-fill'}
                                    disabled={!project.link}
                                />
                            </a>
                        </div>
                        <div className="col-6">
                            <a
                                href={
                                    project.sourceCode
                                        ? project.sourceCode
                                        : null
                                }
                                target="_blank"
                                rel="noreferrer"
                                data-testid="proj-sourcecode"
                            >
                                <BorderlessButton
                                    text={'Source Code'}
                                    textClass={'d-none d-sm-inline'}
                                    iconClass={'bi bi-code'}
                                    hoverIconClass={'bi bi-code-slash'}
                                    disabled={!project.sourceCode}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
