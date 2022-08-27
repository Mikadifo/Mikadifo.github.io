import './ExperienceCard.css';

const ExperienceCard = ({ experienceInfo }) => {
    return (
        <div className="row experience-container">
            <div className="container col-4">
                <div className="row justify-content-center text-center">
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
            <div className="container col-4 justify-content-center d-flex">
                <div className="separator" />
            </div>
            <div className="container col-4 d-flex align-items-center justify-content-center">
                <div className="row">
                    <h3 className="card-title text-center">
                        {experienceInfo.institution}
                    </h3>
                    <p className="card-area text-center">
                        {experienceInfo.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
