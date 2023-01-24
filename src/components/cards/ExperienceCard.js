import './ExperienceCard.css';

const ExperienceCard = ({ experienceInfo }) => {
    return (
        <div
            className="row experience-container"
            data-testid={experienceInfo.id}
        >
            <div className="container col-sm-6 col-md-4">
                <div className="row justify-content-md-center text-md-center text-sm-start text-center justify-content-center justify-content-sm-start">
                    <img
                        className="exp-img"
                        src={experienceInfo.imgUrl}
                        alt={experienceInfo.title}
                    />
                    <div className="row">
                        <p className="date-label">
                            {experienceInfo.dateStart} -{' '}
                            {experienceInfo.dateEnd}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container col-4 justify-content-center d-none d-md-flex">
                <div className="separator" />
            </div>
            <div className="container col-sm-6 col-md-4 d-sm-flex align-items-center">
                <div className="row">
                    <h3 className="card-title text-md-center text-center text-sm-end">
                        {experienceInfo.link ? (
                            <a
                                href={experienceInfo.link}
                                className={'card-link'}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {experienceInfo.institution}
                            </a>
                        ) : (
                            experienceInfo.institution
                        )}
                    </h3>
                    <p className="card-area text-md-center text-center text-sm-end">
                        {experienceInfo.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
