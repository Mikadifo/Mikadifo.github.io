import React from 'react';
import * as Gatsby from 'gatsby';
import { cleanup, render } from '@testing-library/react';

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
const mockUseStaticQuery = {
    allProjectsJson: {
        edges: [
            {
                node: {
                    id: `10408fc6-cc74-5c36-86ea-394c3229e133`,
                    name: `Project Example`,
                    technologies: [`ReactJS`, `Firebase`, `Test`],
                    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\nStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
                    source: `https://www.github.com`,
                    URL: `https://www.test.com`,
                },
            },
        ],
        totalCount: 1,
    },
};

import Projects from '../projects';

describe('Projects', () => {
    beforeEach(() => {
        useStaticQuery.mockImplementation(() => mockUseStaticQuery);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanup();
    });

    it('renders correctly', () => {
        const projects = render(<Projects />).container;
        expect(projects).toBeInTheDocument();
        expect(projects).toHaveTextContent('Projects');
    });

    it('renders project card correctly', () => {
        const projects = render(<Projects />).container;
        const title = projects.getElementsByTagName('h4')[0];
        const description = projects.getElementsByTagName('p');
        const links = projects.getElementsByTagName('a');
        const testNode = mockUseStaticQuery.allProjectsJson.edges[0].node;
        const testDescriptions = testNode.description.split('\n');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(testNode.name);
        testDescriptions.forEach((p, i) => {
            expect(description[i]).toBeInTheDocument();
            expect(description[i]).toHaveTextContent(p);
        });
        expect(description[testDescriptions.length]).toHaveTextContent(
            `Technologies used: ${testNode.technologies.join(' | ')}`,
        );
        //index 0 -> Source Link
        //index 1 -> URL link
        for (let i; i < links.length; i++) {
            expect(links[0]).toBeInTheDocument();
            expect(links[i]).toHaveAttribute('target', '_blank');
            expect(links[i]).toHaveAttribute('rel', 'noreferrer');
        }
        if (testNode.source)
            expect(links[0]).toHaveAttribute('href', testNode.source);
        else expect(links[0]).toHaveClass('hidden');
        expect(links[1]).toHaveAttribute('href', testNode.URL);
        expect(links[1]).toHaveTextContent('See website');
    });
});
