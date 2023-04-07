import * as React from 'react';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = () => {
    return (
        <div className="rounded-tr-lg rounded-bl-lg bg-gradient-to-br from-secondary via-blue-dark to-primary p-[2px]">
            <div className="rounded-tr-lg rounded-bl-lg p-4 lg:p-8 xl:p-12 bg-white dark:bg-blue-dark">
                <h4 className="text-h4-sm lg:text-h4-md xl:text-h4-lg font-kufam mb-2 lg:mb-4 xl:mb-6">
                    Project
                </h4>
                <p className="text-p font-league-spartan opacity-75">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                </p>
                <br />
                <p className="text-p font-league-spartan opacity-75">
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet.
                </p>
                <div className="flex justify-between mt-4 lg:mt-8 xl:mt-9">
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80"
                    >
                        <BsGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </a>
                    <a
                        href="#"
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
