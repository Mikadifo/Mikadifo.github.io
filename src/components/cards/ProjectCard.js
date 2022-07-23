import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card mt-5 card-project">
            <img
                src={project.img}
                className="card-img-top p-4 card-img-project"
                alt={project.title}
            />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
            </div>
            <a
                href={project.link ? project.link : null}
                className={`btn btn-proj-link m-3 ${
                    !project.link && 'disabled-btn'
                }`}
                target="_blank"
            >
                Website
            </a>
            <a
                href={project.sourceCode ? project.sourceCode : null}
                className={`btn btn-sourcecode m-3 mt-0 ${
                    !project.sourceCode && 'disabled-btn'
                }`}
                target="_blank"
            >
                Source Code
            </a>
        </div>
    );
};

export default ProjectCard;
