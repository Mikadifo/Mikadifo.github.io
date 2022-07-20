import './ExperienceCard.css';

const ExperienceCard = ({ experienceInfo, isLeftAligned }) => {
    return (
        <div className="row p-5 pb-0 pt-0">
            {isLeftAligned ? (
                <>
                    <div className="container col col-lg-4">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                className="exp-img rounded"
                                src={experienceInfo.imgUrl}
                                alt={experienceInfo.title}
                            />
                        </div>
                    </div>
                    <div className="container col col-lg-8 d-flex align-items-center justify-content-center">
                        <div className="container">
                            <div className="row">
                                <h3 className="card-title">
                                    {experienceInfo.title} -{' '}
                                    {experienceInfo.institution}
                                </h3>
                            </div>
                            <div className="row">
                                <p className="date-label">
                                    <i>
                                        {experienceInfo.dateStart} -{' '}
                                        {experienceInfo.dateEnd}
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container p-5">
                        {experienceInfo.description
                            .split('\n')
                            .map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="description-paragraph"
                                >
                                    {paragraph}
                                </p>
                            ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="container col col-lg-8 d-flex align-items-center justify-content-center">
                        <div className="container">
                            <div className="row">
                                <h3 className="card-title">
                                    {experienceInfo.title} -{' '}
                                    {experienceInfo.institution}
                                </h3>
                            </div>
                            <div className="row">
                                <p className="date-label">
                                    <i>
                                        {experienceInfo.dateStart} -{' '}
                                        {experienceInfo.dateEnd}
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container col col-lg-4">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                className="exp-img rounded"
                                src={experienceInfo.imgUrl}
                                alt={experienceInfo.title}
                            />
                        </div>
                    </div>
                    <div className="container p-5">
                        {experienceInfo.description
                            .split('\n')
                            .map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="description-paragraph"
                                >
                                    {paragraph}
                                </p>
                            ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ExperienceCard;
