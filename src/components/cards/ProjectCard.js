import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card" style={{ width: '20rem' }}>
            <img
                src={project.img}
                className="card-img-top p-3"
                alt={project.title}
                style={{ maxWidth: '15rem' }}
            />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
            </div>
            <a href={project.link} className="btn btn-proj-link m-3">
                Website
            </a>
            <a
                href={project.sourceCode}
                className="btn btn-sourcecode m-3 mt-0"
            >
                Source Code
            </a>
        </div>
    );
};

export default ProjectCard;
