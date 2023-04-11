import React from 'react';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = ({ project }) => {
    return (
        <div className="rounded-tr-lg rounded-bl-lg bg-gradient-to-br from-secondary via-blue-dark to-primary p-[2px]">
            <div className="flex flex-col justify-between rounded-tr-lg rounded-bl-lg p-4 lg:p-8 xl:p-12 bg-white dark:bg-blue-dark min-h-[350px]">
                <div>
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
                    <p className="mt-3 text-p font-league-spartan">
                        Technologies used:{' '}
                        <span className="opacity-75">
                            {project.technologies.join(' | ')}
                        </span>
                    </p>
                </div>
                <div
                    className={`flex mt-5 ${
                        project.source ? 'justify-between' : 'justify-end'
                    }`}
                >
                    <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        className={
                            project.source ? 'hover:opacity-80' : 'hidden'
                        }
                    >
                        <BsGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </a>
                    <a
                        href={project.URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-h6-md lg:text-h6-lg font-bold hover:underline underline-offset-4"
                    >
                        See website
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
