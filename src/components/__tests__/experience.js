import React from 'react';
import * as Gatsby from 'gatsby';
import { cleanup, render } from '@testing-library/react';

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
const mockUseStaticQuery = {
    allExperienceJson: {
        edges: [
            {
                node: {
                    id: 'cccf3d8a-ad71-58c2-91a7-beb1f59eb74e',
                    institution: 'Freelancer',
                    role: 'Front End Developer',
                    date: '2022 - Now',
                    description:
                        "As a freelancer I've been learning how to manage deadlines and how to communicate with clients. This is a great opportunity to explore a lot of new ideas from different people, and see how their projects come to light.",
                    link: 'https://www.linkedin.com/in/mikadifo/',
                },
            },
            {
                node: {
                    id: '680bfc72-b14a-5b03-bd09-d17a59337f21',
                    institution: 'LibélulaSoft',
                    role: 'Full Stack Developer',
                    date: '2021 - 2022',
                    description:
                        "Working on LibelulaSoft has been one of the best experiences and opportunities I ever had. Here I've learned to work on teams and to manage tasks and the time I spend on them. It also was a great moment to make new friends and have fun.",
                    link: 'https://www.libelulasoft.com/',
                },
            },
        ],
    },
};

import Experience from '../experience';

describe('Experience', () => {
    beforeEach(() => {
        useStaticQuery.mockImplementation(() => mockUseStaticQuery);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanup();
    });

    it('renders correctly', () => {
        const experience = render(<Experience />).container;
        expect(experience).toBeInTheDocument();
        expect(experience).toHaveTextContent('Where I’ve worked');
    });

    it('renders every tag correctly', () => {
        const experience = render(<Experience />).container;
        const tags = experience.getElementsByClassName('tag-container');
        const testNodes = mockUseStaticQuery.allExperienceJson.edges;
        testNodes.forEach(({ node }, i) => {
            const left = i % 2 === 0;
            const link = tags[i].getElementsByTagName('a')[0];
            expect(tags[i]).toBeInTheDocument();
            expect(tags[i]).toHaveTextContent(node.description);
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', node.link);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noreferrer');
            if (left)
                expect(link).toHaveClass(
                    'rounded-r-lg pl-16 md:pl-32 xl:pl-64 pr-8 md:pr-16 lg:pr-20 bg-gradient-to-r md:mr-12 lg:mr-16 md:hover:translate-x-6 hover:transition active:-translate-x-6',
                );
            else
                expect(link).toHaveClass(
                    'rounded-l-lg pr-16 md:pr-32 xl:pr-64 order-last pl-8 md:pl-16 lg:pl-20 bg-gradient-to-l md:ml-12 lg:ml-16 md:hover:-translate-x-6 hover:transition active:translate-x-6',
                );
            const institution = link.getElementsByTagName('h4')[0];
            const roleAndDate = link.getElementsByTagName('p'); //0 for role and 1 for date
            expect(institution).toBeInTheDocument();
            expect(institution).toHaveTextContent(node.institution);
            expect(roleAndDate[0]).toBeInTheDocument();
            expect(roleAndDate[0]).toHaveTextContent(node.role);
            expect(roleAndDate[1]).toBeInTheDocument();
            expect(roleAndDate[1]).toHaveTextContent(node.date);
        });
    });
});
