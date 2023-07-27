import React from 'react';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = ({ project }) => {
    return (
        <div className="rounded-lg border border-secondary p-4 lg:p-8 xl:p-12">
            <div className="flex flex-col md:flex-row">
                <div className="bg-[#fff] flex place-content-center mr-0 md:mr-6 lg:mr-8 xl:mr-12 mb-8 md:mb-0 rounded-md">
                    <img
                        className="sm:max-w-[250px] sm:max-h-[300px] lg:max-w-[350px] lg:max-h-[400px]"
                        src={project.image.src_.publicURL}
                        alt={project.name}
                    />
                </div>
                <div className="flex flex-col justify-between w-full">
                    <div>
                        <h4 className="text-h4-sm lg:text-h4-md xl:text-h4-lg font-kufam mb-2 lg:mb-4 xl:mb-6">
                            {project.name}
                        </h4>
                        {project.description
                            .split('\n')
                            .map((description, i) => (
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
                    <div
                        className={`flex mt-5 items-center ${
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
                            <BsGithub className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        </a>
                        <a
                            href={project.URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-h6-md lg:text-h6-lg font-bold bg-secondary py-2 px-6 rounded-lg hover:opacity-75"
                        >
                            See website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
