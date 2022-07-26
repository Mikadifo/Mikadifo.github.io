import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';

beforeEach(() => {
    render(<Footer />);
});

afterEach(() => {
    cleanup();
});

test('footer render copyright', () => {
    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('2022');
    expect(footer).toHaveTextContent('Copyright');
    expect(footer).toHaveTextContent('Mikadifo');
    expect(footer).toHaveTextContent('Design');
    expect(footer).toHaveTextContent('ForaneoBlack');
});

test('footer icons working', () => {
    const footerTwitter = screen.getByTestId('footer-tw-icon');
    const footerInstagram = screen.getByTestId('footer-ig-icon');
    const footerLinkedin = screen.getByTestId('footer-ln-icon');
    const footerGithub = screen.getByTestId('footer-gh-icon');

    expect(footerTwitter).toBeInTheDocument();
    expect(footerInstagram).toBeInTheDocument();
    expect(footerLinkedin).toBeInTheDocument();
    expect(footerGithub).toBeInTheDocument();
    expect(footerTwitter.querySelector('i')).toHaveAttribute(
        'class',
        'fab fa-twitter',
    );
    expect(footerInstagram.querySelector('i')).toHaveAttribute(
        'class',
        'fab fa-instagram',
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
    expect(footerInstagram).toHaveAttribute(
        'href',
        'https://www.instagram.com/mikadifo',
    );
    expect(footerLinkedin).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/mikadifo',
    );
    expect(footerGithub).toHaveAttribute('href', 'https://github.com/Mikadifo');
});

test('footer copyright links working', () => {
    const copyMikadifo = screen.getByTestId('copy-mika');
    const copyDavid = screen.getByTestId('copy-david');

    expect(copyMikadifo).toHaveAttribute('href', 'https://mikadifo.com');
    expect(copyDavid).toHaveAttribute(
        'href',
        'https://www.instagram.com/foraneoblack',
    );
});
