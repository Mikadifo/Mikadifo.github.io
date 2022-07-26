import { render, screen, cleanup } from '@testing-library/react';
import Home from './Home';

beforeEach(() => {
    render(<Home />);
});

afterEach(() => {
    cleanup();
});

test('home render info, img and button', () => {
    const home = screen.getByTestId('home');
    const homeImg = screen.getByTestId('home-img');
    expect(home).toBeInTheDocument();
    expect(homeImg).toBeInTheDocument();
    expect(homeImg).toHaveAttribute('src', 'face-img.png');
    expect(home).toHaveTextContent("HEY I'M");
    expect(home).toHaveTextContent('MICHAEL');
    expect(home).toHaveTextContent('SOFTWARE DEVELOPER');
    expect(home).toHaveTextContent('MORE ABOUT ME');
});

test('button is working', () => {
    const aboutButton = screen.getByTestId('about-button');
    expect(aboutButton).toHaveAttribute('href', '#description');
});
