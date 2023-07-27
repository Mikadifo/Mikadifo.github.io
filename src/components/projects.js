import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ProjectCard from './projectCard';
import CarouselControls from './carouselControls';

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
                    }
                }
                totalCount
            }
        }
    `);

    return (
        <div className="text-blue-dark dark:text-white mt-20 md:mt-24 lg:mt-48">
            <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 lg:mb-8 font-kufam font-bold">
                Projects
            </h3>
            <CarouselControls
                elements={allProjectsJson}
                renderElement={(project) => (
                    <ProjectCard
                        project={allProjectsJson.edges[project].node}
                    />
                )}
            />
        </div>
    );
};

export default Projects;
