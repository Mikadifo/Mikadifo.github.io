import './ExperienceCard.css';

const ExperienceCard = ({ experienceInfo, isLeftAligned }) => {
    return (
        <div className="hstack p-5">
            {isLeftAligned ? (
                <>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                className="exp-img rounded"
                                src={experienceInfo.imgUrl}
                                alt={experienceInfo.title}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <h3>
                            {experienceInfo.title} -{' '}
                            {experienceInfo.institution}
                        </h3>
                        <p className="date-label">
                            <i>
                                {experienceInfo.dateStart} -{' '}
                                {experienceInfo.dateEnd}
                            </i>
                        </p>
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
                    <div className="container">
                        <h3>
                            {experienceInfo.title} -{' '}
                            {experienceInfo.institution}
                        </h3>
                        <p className="date-label">
                            <i>
                                {experienceInfo.dateStart} -{' '}
                                {experienceInfo.dateEnd}
                            </i>
                        </p>
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
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                className="exp-img rounded"
                                src={experienceInfo.imgUrl}
                                alt={experienceInfo.title}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ExperienceCard;
