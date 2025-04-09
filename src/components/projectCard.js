import React from 'react';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = ({ project }) => {
    return (
        <div className="rounded-lg max-w-[402px] border border-solid border-blue-dark dark:border-secondary grid place-content-between">
            <div>
                <img
                    className="place-self-center rounded-tl-lg rounded-tr-lg"
                    src={project.image.src_.publicURL}
                    alt={project.name}
                />
                <div className="px-7 pt-7">
                    <h4 className="text-h4-sm lg:text-h4-md xl:text-h4-lg font-kufam mb-2 lg:mb-4 xl:mb-6">
                        {project.name}
                    </h4>
                    {project.description.split('\n').map((description, i) => (
                        <p
                            className={`text-p font-league-spartan opacity-75 ${
                                i > 0 ? 'mt-3' : ''
                            }`}
                            key={i}
                        >
                            {description}
                        </p>
                    ))}
                </div>
            </div>
            <div
                className={`flex p-7 mt-10 items-center ${
                    project.source
                        ? 'justify-between'
                        : 'justify-center sm:justify-end'
                }`}
            >
                <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className={project.source ? 'hover:opacity-80' : 'hidden'}
                    aria-label="Project Source Code Link"
                >
                    <BsGithub className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </a>
                <a
                    href={project.URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-h6-md lg:text-h6-lg font-bold font-kufam bg-primary py-2 px-6 rounded-lg hover:opacity-75 text-white" ${project.URL ? '' : 'hidden'}`}
                >
                    See website
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
