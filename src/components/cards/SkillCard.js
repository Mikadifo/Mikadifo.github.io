const SkillCard = ({ skill }) => {
    return (
        <>
            <div
                className="card mb-5"
                style={{ maxWidth: 540, maxHeight: '8rem' }}
            >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={skill.img}
                            style={{ maxHeight: '8rem' }}
                            className="img-fluid rounded-start p-2"
                            alt={skill.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{skill.title}</h4>
                            <p className="card-text">
                                <b>Experience Time:</b> {skill.time}
                            </p>
                        </div>
                    </div>
                </div>
            </div>{' '}
        </>
    );
};

export default SkillCard;
