import { useEffect, useRef } from 'react';
import ExperienceCard from '../../components/cards/ExperienceCard';
import useIntersection from '../../hooks/useIntersection';
import educationExperience from './../../resources/data/education.json';
import jobExperience from './../../resources/data/jobs.json';
import './Experience.css';

const Experience = ({ setCurrentItem }) => {
    const ref = useRef();
    const inViewport = useIntersection(ref);

    useEffect(() => {
        if (inViewport) {
            window.history.replaceState(null, null, '#experience');
            setCurrentItem('#experience');
        }
    });

    const renderList = (list) => {
        return (
            <div className="row align-items-center justify-content-center">
                {list.map((item) => (
                    <ExperienceCard key={item.id} experienceInfo={item} />
                ))}
            </div>
        );
    };

    return (
        <div id="experience" data-testid="experience">
            <h1 className="text-center experience-title" ref={ref}>
                EXPERIENCE
            </h1>
            {renderList(jobExperience)}
            <h1 className="text-center education-title">EDUCATION</h1>
            {renderList(educationExperience)}
        </div>
    );
};

export default Experience;
