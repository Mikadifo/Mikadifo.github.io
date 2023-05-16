import React from 'react';
import * as Gatsby from 'gatsby';
import { cleanup, render } from '@testing-library/react';

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
const mockUseStaticQuery = {
    allReviewsJson: {
        edges: [
            {
                node: {
                    id: 'b9363a5b-30ce-579b-96ae-72892e24751f',
                    URL: 'https://centeravid.com/',
                    name: 'Isabel',
                    role: 'Technical Director at Centeravid',
                    text: '"Perfecto servicio y gran amabilidad. Nos ayudaron con los contenidos, nos asesoraron con las fotos y resto de elementos de la web. Además fueron muy rápidos y eficaces. Estamos encantados tuvimos muchos beneficios con la página, incrementó notoriamente la cobertura de CENTERAVID."',
                },
            },
        ],
        totalCount: 1,
    },
};

import Reviews from '../reviews';

describe('Reviews', () => {
    beforeEach(() => {
        useStaticQuery.mockImplementation(() => mockUseStaticQuery);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanup();
    });

    it('renders correctly', () => {
        const reviews = render(<Reviews />).container;
        expect(reviews).toBeInTheDocument();
        expect(reviews).toHaveTextContent('Reviews');
    });

    it('renders review card correctly', () => {
        const reviews = render(<Reviews />).container;
        const name = reviews.getElementsByTagName('h4')[0];
        const role = reviews.getElementsByTagName('h5')[0];
        const text = reviews.getElementsByTagName('p')[0];
        const link = reviews.getElementsByTagName('a')[0];
        const testNode = mockUseStaticQuery.allReviewsJson.edges[0].node;
        expect(name).toBeInTheDocument();
        expect(name).toHaveTextContent(testNode.name);
        expect(role).toBeInTheDocument();
        expect(role).toHaveTextContent(testNode.role);
        expect(text).toBeInTheDocument();
        expect(text).toHaveTextContent(testNode.text);
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
        expect(link).toHaveAttribute('href', testNode.URL);
        expect(link).toHaveTextContent('See website');
    });
});
