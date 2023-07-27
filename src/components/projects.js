import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ProjectCard from './projectCard';

const Projects = () => {
    const { allProjectsJson } = useStaticQuery(graphql`
        query ProjectsQuery {
            allProjectsJson {
                edges {
                    node {
                        id
                        name
                        technologies
                        description
                        source
                        URL
                        image {
                            src_ {
                                publicURL
                            }
                        }
                    }
                }
                totalCount
            }
        }
    `);

    return (
        <div className="text-blue-dark dark:text-white mx-16 md:mx-24 lg:mx-24 xl:mx-48">
            <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 lg:mb-8 font-kufam font-bold mt-20 md:mt-24 lg:mt-48">
                Projects
            </h3>
            <div className="flex flex-col gap-12 lg:gap-20">
                {allProjectsJson.edges.map(({ node }) => (
                    <ProjectCard project={node} key={node.id} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
