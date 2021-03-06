import skills from './../../resources/data/skills.json';
import SkillCard from '../../components/cards/SkillCard';
import './Skills.css';

const Skills = () => {
    return (
        <div id="skills" className="p-5" data-testid="skills">
            <h1 className="text-center pt-3 pb-5 skills-title">SKILLS</h1>
            <div className="row d-flex align-items-center justify-content-center">
                {skills.map((skill) => (
                    <div
                        className="col col-lg-4 col-md-8 col-sm-8 col-12"
                        key={skill.id}
                        data-testid={skill.id}
                    >
                        <SkillCard skill={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
