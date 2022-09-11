import { render, screen, cleanup } from '@testing-library/react';
import Description from './Description';
import {
    descriptionParagraph1,
    descriptionParagraph2,
} from '../../constants/texts';

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<Description />);
});

afterEach(() => {
    cleanup();
});

test('description render info', () => {
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('About Me');
    expect(description).toHaveTextContent(descriptionParagraph1);
    expect(description).toHaveTextContent(descriptionParagraph2);
});
