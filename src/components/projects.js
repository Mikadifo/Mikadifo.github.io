import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import ProjectCard from './projectCard';
import arrow from './../images/arrow.svg';

const Projects = () => {
    const { allProjectsJson } = useStaticQuery(graphql`
        query ProjectsQuery {
            allProjectsJson {
                edges {
                    node {
                        id
                        name
                        description
                        source
                        URL
                    }
                }
                totalCount
            }
        }
    `);

    const DEFAULT_CONTROL_STYLE =
        'border-[1px] border-solid border-l-white border-r-white dark:border-l-blue-dark dark:border-r-blue-dark';
    const [currentProject, setCurrentProject] = useState(0);

    const setPrevious = () => {
        if (currentProject > 0) return setCurrentProject(currentProject - 1);
        setCurrentProject(allProjectsJson.totalCount - 1);
    };

    const setNext = () => {
        if (currentProject < allProjectsJson.totalCount - 1)
            return setCurrentProject(currentProject + 1);
        setCurrentProject(0);
    };

    return (
        <div className="text-blue-dark dark:text-white mt-10">
            <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 lg:mb-8 font-kufam font-bold">
                Projects
            </h3>
            <div className="grid grid-cols-6 place-items-center">
                <button
                    type="button"
                    onClick={setPrevious}
                    className="hover:opacity-75"
                >
                    <img src={arrow} alt="See previous project" />
                </button>
                <div className="col-span-4">
                    <ProjectCard
                        project={allProjectsJson.edges[currentProject].node}
                    />
                    <div className="mt-2 flex place-content-center">
                        {allProjectsJson.edges.map(({ node }, i) => (
                            <button
                                type="button"
                                key={node.id}
                                onClick={() => setCurrentProject(i)}
                                aria-label={`Go to project ${i}`}
                                className={`${
                                    i <= 0
                                        ? 'rounded-bl-lg'
                                        : i >= allProjectsJson.totalCount - 1
                                        ? 'rounded-tr-lg'
                                        : DEFAULT_CONTROL_STYLE
                                } bg-blue-dark dark:bg-white w-9 h-6 ${
                                    i === currentProject
                                        ? 'opacity-50'
                                        : 'opacity-25'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={setNext}
                    className="hover:opacity-75"
                >
                    <img
                        src={arrow}
                        alt="See next project"
                        className="rotate-180"
                    />
                </button>
            </div>
        </div>
    );
};

export default Projects;
