import React from 'react';
import { cleanup, render } from '@testing-library/react';
import About from '../about';

describe('About', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        const about = render(<About />).container;
        expect(about).toBeInTheDocument();
        expect(about).toHaveTextContent('About me');
        expect(about).toHaveTextContent(
            'I am a passionate front-end software developer, with more than 3 years of experience.',
        );
        expect(about).toHaveTextContent(
            'I love exploring new ideas and learning new technologies.',
        );
    });
});
