import { render, screen, cleanup } from '@testing-library/react';
import skillList from './../../resources/data/skills.json';
import Skills from './Skills';

beforeEach(() => {
    render(<Skills />);
});

afterEach(() => {
    cleanup();
});

test('skills render cards from json', () => {
    const skills = screen.getByTestId('skills');
    expect(skills).toBeInTheDocument();
    expect(skills).toHaveTextContent('SKILLS');
    skillList.forEach((skill) => {
        const skillRendered = screen.getByTestId(skill.id);
        expect(skillRendered).toBeInTheDocument();
        expect(skillRendered).toHaveTextContent(skill.title);
        expect(skillRendered).toHaveTextContent(skill.time);
        expect(skillRendered.querySelector('img')).toHaveAttribute(
            'src',
            skill.img,
        );
    });
});
