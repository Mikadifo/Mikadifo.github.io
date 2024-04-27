import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CallToAction from '../callToAction';

describe('Call To Action', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        const callToAction = render(<CallToAction />).container;
        expect(callToAction).toBeInTheDocument();
        expect(callToAction).toHaveTextContent("Hey, I'm Michael");
        expect(callToAction).toHaveTextContent('Web Developer');
        const button = callToAction.getElementsByTagName('a')[0];
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Contact me');
        expect(button).toHaveAttribute('href', '#contact-form');
    });
});
