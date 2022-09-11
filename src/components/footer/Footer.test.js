import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<Footer />);
});

afterEach(() => {
    cleanup();
});

test('footer render copyright', () => {
    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('© 2022 Mikadifo. All rights reserved.');
});

test('footer icons working', () => {
    const footerTwitter = screen.getByTestId('footer-tw-icon');
    const footerLinkedin = screen.getByTestId('footer-ln-icon');
    const footerGithub = screen.getByTestId('footer-gh-icon');

    expect(footerTwitter).toBeInTheDocument();
    expect(footerLinkedin).toBeInTheDocument();
    expect(footerGithub).toBeInTheDocument();
    expect(footerTwitter.querySelector('i')).toHaveAttribute(
        'class',
        'fab fa-twitter',
    );
    expect(footerLinkedin.querySelector('i')).toHaveAttribute(
        'class',
        'fab fa-linkedin',
    );
    expect(footerGithub.querySelector('i')).toHaveAttribute(
        'class',
        'fab fa-github',
    );
    expect(footerTwitter).toHaveAttribute(
        'href',
        'https://twitter.com/Mikadifo2',
    );
    expect(footerLinkedin).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/mikadifo',
    );
    expect(footerGithub).toHaveAttribute('href', 'https://github.com/Mikadifo');
});
