import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div
            className="card mt-5"
            style={{
                width: '25rem',
                maxWidth: '25rem',
                maxHeight: '40rem',
                height: '40rem',
            }}
        >
            <img
                src={project.img}
                className="card-img-top p-4"
                alt={project.title}
                style={{
                    maxWidth: '25rem',
                    width: '25rem',
                    maxHeight: '18rem',
                    height: 'auto',
                }}
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
