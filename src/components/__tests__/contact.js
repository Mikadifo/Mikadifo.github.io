import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Contact from '../contact';

describe('Contact', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        const contact = render(<Contact />).container;
        const title = contact.getElementsByTagName('h3')[0];
        const button = contact.getElementsByTagName('button')[0];
        const inputs = contact.getElementsByTagName('label');
        const inputsMock = [
            {
                label: 'Your name:',
            },
            {
                label: 'Your email:',
            },
            {
                label: 'Your idea:',
                type: 'textarea',
            },
        ];
        expect(contact).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Contact me');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Let's talk");
        inputsMock.forEach((input, i) => {
            expect(inputs[i]).toBeInTheDocument();
            expect(inputs[i]).toHaveTextContent(input.label);
            const field = inputs[i].getElementsByTagName(
                input.type === 'textarea' ? 'textarea' : 'input',
            )[0];
            expect(field).toBeInTheDocument();
            expect(field).toHaveAttribute('required');
        });
    });
});
