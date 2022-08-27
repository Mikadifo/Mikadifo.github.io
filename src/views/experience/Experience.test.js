import { render, screen, cleanup } from '@testing-library/react';
import educationExperience from './../../resources/data/education.json';
import jobExperience from './../../resources/data/jobs.json';
import Experience from './Experience';

beforeEach(() => {
    render(<Experience />);
});

afterEach(() => {
    cleanup();
});

test('education render cards from json', () => {
    const education = screen.getByTestId('experience');
    expect(education).toBeInTheDocument();
    expect(education).toHaveTextContent('EDUCATION');
    educationExperience.forEach((education) => {
        const cardRendered = screen.getByTestId(education.id);
        expect(cardRendered).toBeInTheDocument();
        expect(cardRendered).toHaveTextContent(education.title);
        expect(cardRendered).toHaveTextContent(education.institution);
        expect(cardRendered).toHaveTextContent(education.dateStart);
        expect(cardRendered).toHaveTextContent(education.dateEnd);
        expect(cardRendered.querySelector('img')).toHaveAttribute(
            'src',
            education.img,
        );
    });
});

test('job render cards from json', () => {
    const education = screen.getByTestId('experience');
    expect(education).toBeInTheDocument();
    expect(education).toHaveTextContent('EXPERIENCE');
    jobExperience.forEach((job) => {
        const cardRendered = screen.getByTestId(job.id);
        expect(cardRendered).toBeInTheDocument();
        expect(cardRendered).toHaveTextContent(job.title);
        expect(cardRendered).toHaveTextContent(job.institution);
        expect(cardRendered).toHaveTextContent(job.dateStart);
        expect(cardRendered).toHaveTextContent(job.dateEnd);
        expect(cardRendered.querySelector('img')).toHaveAttribute(
            'src',
            job.img,
        );
    });
});
