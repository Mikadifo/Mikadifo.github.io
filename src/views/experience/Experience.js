import ExperienceCard from '../../components/cards/ExperienceCard';
import Footer from '../../components/footer/Footer';
import educationExperience from './../../resources/data/education.json';
import jobExperience from './../../resources/data/jobs.json';
import './Experience.css';

const Experience = () => {
    let leftAligned = false;

    return (
        <>
            <div id="experience" data-testid="experience">
                <h1 className="text-center pt-5 pb-5 education-title">
                    EDUCATION
                </h1>
                <div className="row align-items-center justify-content-center">
                    {educationExperience.map((item) => {
                        leftAligned = !leftAligned;
                        return (
                            <ExperienceCard
                                key={item.id}
                                experienceInfo={item}
                                isLeftAligned={leftAligned}
                            />
                        );
                    })}
                </div>
                <h1 className="text-center pt-5 pb-5 experience-title">
                    EXPERIENCE
                </h1>
                <div className="row align-items-center justify-content-center">
                    {jobExperience.map((item) => {
                        leftAligned = !leftAligned;
                        return (
                            <ExperienceCard
                                key={item.id}
                                experienceInfo={item}
                                isLeftAligned={leftAligned}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Experience;
