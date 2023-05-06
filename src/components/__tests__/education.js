import React from 'react';
import * as Gatsby from 'gatsby';
import { cleanup, render } from '@testing-library/react';

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
const mockUseStaticQuery = {
    allEducationJson: {
        edges: [
            {
                node: {
                    id: 'c6c09079-ca5c-5681-adb4-664b0365d50d',
                    institution: 'Hunter College',
                    role: 'Computer Science',
                    date: '2023 - Now',
                    description:
                        "Even though it's my first year at Hunter College, I've learn a lot. I'm exploring different topics and fields, knowing more about different cultures and their languages. I can't wait to see all the new knowledge and experience I will get at Hunter.",
                    link: 'https://hunter.cuny.edu/',
                },
            },
            {
                node: {
                    id: 'b8c01b02-fa60-5424-88ab-a7bac5c8e013',
                    institution: 'Codepath',
                    role: 'Cybersecurity',
                    date: '2023 - Now',
                    description:
                        "Codepath cybersecurity course is only 10 sessions long, but enough to get plenty of new knowledge for your professional career. On top of that, I've learned to use Linux and other tools, as well as connect with people all over the world.",
                    link: 'https://www.codepath.org/',
                },
            },
            {
                node: {
                    id: '4068a3b6-a0dd-53cf-b850-454a59219218',
                    institution: 'TecAzuay',
                    role: 'Software Development',
                    date: '2019 - 2021',
                    description:
                        "TecAzuay was one of my first approaches to technology, it's like my home and will always be thankful for that. Here I have learned the basics of programming, which later on helped me improve my skills. I also made good friends that supported me all this time.",
                    link: 'https://www.tecazuay.edu.ec/',
                },
            },
        ],
    },
};

import Education from '../education';

describe('Education', () => {
    beforeEach(() => {
        useStaticQuery.mockImplementation(() => mockUseStaticQuery);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanup();
    });

    it('renders correctly', () => {
        const education = render(<Education />).container;
        expect(education).toBeInTheDocument();
        expect(education).toHaveTextContent('Where I’ve studied');
    });

    it('renders every tag correctly', () => {
        const education = render(<Education />).container;
        const tags = education.getElementsByClassName('tag-container');
        const testNodes = mockUseStaticQuery.allEducationJson.edges;
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
