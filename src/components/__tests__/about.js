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
            'As an experienced full stack software developer and freelancer, my journey spans over 4 years in web development. Driven by curiosity, I thrive on exploring and mastering emerging technologies.',
        );
        expect(about).toHaveTextContent(
            'My dedication to delivering innovative solutions fuels my passion for building extraordinary software. Always seeking new challenges and knowledge to stay ahead in this fast growing industry.',
        );
    });
});
