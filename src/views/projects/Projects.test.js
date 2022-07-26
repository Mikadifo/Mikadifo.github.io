import { render, screen, cleanup } from '@testing-library/react';
import projectList from './../../resources/data/projects.json';
import Projects from './Projects';

beforeEach(() => {
    render(<Projects />);
});

afterEach(() => {
    cleanup();
});

test('projects render cards from json (img, texts, links)', () => {
    const projects = screen.getByTestId('projects');
    expect(projects).toBeInTheDocument();
    expect(projects).toHaveTextContent('PROJECTS');
    projectList.forEach((project) => {
        const projectRendered = screen.getByTestId(project.id);
        expect(projectRendered).toBeInTheDocument();
        expect(projectRendered).toHaveTextContent(project.title);
        expect(projectRendered).toHaveTextContent(project.description);
        expect(projectRendered).toHaveTextContent('Website');
        expect(projectRendered).toHaveTextContent('Source Code');
        expect(projectRendered.querySelector('img')).toHaveAttribute(
            'src',
            project.img,
        );
        const websiteButton = projectRendered.querySelector('.btn-proj-link');
        const sourceCodeButton =
            projectRendered.querySelector('.btn-sourcecode');
        expect(websiteButton).toHaveProperty('href', project.link);
        expect(sourceCodeButton).toHaveProperty('href', project.sourceCode);
        if (!project.link) expect(websiteButton).toHaveClass('disabled-btn');
        if (!project.sourceCode)
            expect(sourceCodeButton).toHaveClass('disabled-btn');
    });
});
