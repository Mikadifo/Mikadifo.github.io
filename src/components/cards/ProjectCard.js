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
                            <button>btn1</button>
                        </div>
                        <div className="col-6">
                            <button>btn2</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//return (
//<div className="card card-project">
//<div className="card-body">
//<h5 className="card-title">{project.title}</h5>
//<p className="card-text">{project.description}</p>
//</div>
//<a
//href={project.link ? project.link : null}
//className={`btn btn-proj-link ${
//!project.link && 'disabled-btn'
//}`}
//target="_blank"
//>
//Website
//</a>
//<a
//href={project.sourceCode ? project.sourceCode : null}
//className={`btn btn-sourcecode ${
//!project.sourceCode && 'disabled-btn'
//}`}
//target="_blank"
//>
//Source Code
//</a>
//</div>
//);

export default ProjectCard;
