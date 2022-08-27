import BorderlessButton from './../buttons/BorderlessButton/BorderlessButton';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card-project">
            <div className="row">
                <div className="col-4 p-0">
                    <img
                        src={project.img}
                        className="card-img-project"
                        alt={project.title}
                    />
                </div>
                <div className="col-8 project-description-container">
                    <p className="card-text">
                        <b>{project.title}: </b>
                        {project.description}
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <BorderlessButton
                                text={'Website'}
                                iconClass={'bi bi-display'}
                                hoverIconClass={'bi bi-display-fill'}
                            />
                        </div>
                        <div className="col-6">
                            <BorderlessButton
                                text={'Source Code'}
                                iconClass={'bi bi-code'}
                                hoverIconClass={'bi bi-code-slash'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
