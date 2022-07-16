import skills from './../../resources/data/skills.json';
import SkillCard from '../../components/cards/SkillCard';
import './Skills.css';

const Skills = () => {
    return (
        <div id="skills" className="p-5">
            <h1 className="text-center pt-3 pb-5">Skills</h1>
            <div className="row align-items-center justify-content-center">
                {skills.map((skill) => (
                    <div className="col col-lg-4" key={skill.id}>
                        <SkillCard skill={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
