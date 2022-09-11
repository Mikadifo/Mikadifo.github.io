import { render, screen, cleanup } from '@testing-library/react';
import Navbar from './Navbar';

beforeEach(() => {
    render(<Navbar />);
});

afterEach(() => {
    cleanup();
});

test('navbar render options and brand', () => {
    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveTextContent('M');
    expect(navbar).toHaveTextContent('About Me');
    expect(navbar).toHaveTextContent('Projects');
    expect(navbar).toHaveTextContent('Experience');
    expect(navbar).toHaveTextContent('Blog');
});

test('Links are working', () => {
    const navBrand = screen.getByTestId('nav-brand');
    const navAbout = screen.getByTestId('nav-item-about');
    const navProjects = screen.getByTestId('nav-item-pro');
    const navExperience = screen.getByTestId('nav-item-exp');
    const navBlog = screen.getByTestId('nav-item-blog');

    expect(navBrand).toHaveAttribute('href', '#home');
    expect(navAbout).toHaveAttribute('href', '#description');
    expect(navProjects).toHaveAttribute('href', '#projects');
    expect(navExperience).toHaveAttribute('href', '#experience');
    expect(navBlog).toHaveAttribute('href', 'https://blog.mikadifo.com');
});
