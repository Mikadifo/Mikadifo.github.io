import { render, screen, cleanup } from '@testing-library/react';
import Description from './Description';
import {
    descriptionParagraph1,
    descriptionParagraph2,
} from '../../constants/texts';

beforeEach(() => {
    render(<Description />);
});

afterEach(() => {
    cleanup();
});

test('description render info and img', () => {
    const description = screen.getByTestId('description');
    const descriptionImg = screen.getByTestId('description-img');
    expect(description).toBeInTheDocument();
    expect(descriptionImg).toBeInTheDocument();
    expect(descriptionImg).toHaveAttribute('src', 'face-img.png');
    expect(description).toHaveTextContent('ABOUT ME');
    expect(description).toHaveTextContent(descriptionParagraph1);
    expect(description).toHaveTextContent(descriptionParagraph2);
});
