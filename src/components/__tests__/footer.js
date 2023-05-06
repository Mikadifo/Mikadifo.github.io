import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Footer from '../footer';

describe('Footer', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        const footer = render(<Footer />).container;
        const emailLink = footer.getElementsByTagName('a')[0];
        const copyright = footer.getElementsByTagName('p')[0];
        expect(footer).toBeInTheDocument();
        expect(emailLink).toBeInTheDocument();
        expect(emailLink).toHaveTextContent('contact@mikadifo.com');
        expect(emailLink).toHaveAttribute(
            'href',
            'mailto:contact@mikadifo.com',
        );
        expect(copyright).toBeInTheDocument();
        expect(copyright).toHaveTextContent('© 2022 Mikadifo');
    });
});
