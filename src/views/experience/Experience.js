import ExperienceCard from '../../components/cards/ExperienceCard';
import Footer from '../../components/footer/Footer';
import educationExperience from './../../resources/data/education.json';
import jobExperience from './../../resources/data/jobs.json';
import './Experience.css';

const Experience = () => {
    let leftAligned = false;

    return (
        <>
            <div id="experience">
                <h1 className="text-center pt-5">Education</h1>
                <div className="vstack gap-5 align-items-center justify-content-center">
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
                <h1 className="text-center pt-5">Experience</h1>
                <div className="vstack gap-5 align-items-center justify-content-center">
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
            <Footer />
        </>
    );
};

export default Experience;
