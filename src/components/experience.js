import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Tag from './tag';

const Experience = () => {
    const { allExperienceJson } = useStaticQuery(graphql`
        query ExperienceQuery {
            allExperienceJson {
                edges {
                    node {
                        id
                        institution
                        role
                        date
                        description
                        link
                    }
                }
            }
        }
    `);

    return (
        <div className="text-blue-dark dark:text-white mt-16">
            <h3 className="text-h3-sm lg:text-h3-md xl:text-h3-lg font-bold font-kufam text-center mb-6 lg:mb-10">
                Where I’ve worked
            </h3>
            <div className="grid gap-8 md:gap-12 lg:gap-14">
                {allExperienceJson.edges.map(({ node }, i) => (
                    <Tag key={node.id} left={i % 2 === 0} data={node} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
