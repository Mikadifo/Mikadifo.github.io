import { render, screen, cleanup } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Description from './Description';
import {
    descriptionParagraph1,
    descriptionParagraph2,
} from '../../constants/texts';

beforeEach(() => {
    render(
        <HashRouter>
            <Description />
        </HashRouter>,
    );
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
