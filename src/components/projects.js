import * as React from 'react';
import Arrow from './arrow';
import ProjectCard from './projectCard';

const Projects = () => {
    return (
        <div className="text-blue-dark dark:text-white mt-10">
            <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 font-kufam">
                Projects
            </h3>
            <div className="grid grid-cols-6">
                <button className="flex justify-center items-center">
                    <Arrow left={true} />
                </button>
                <div className="col-span-4">
                    <ProjectCard />
                    <div className="mt-2 flex place-content-center">
                        <span className="bg-blue-dark dark:bg-white opacity-50 w-9 h-6 rounded-bl-lg" />
                        <span className="bg-blue-dark dark:bg-white opacity-25 w-9 h-6 border-[1px] border-solid border-l-white border-r-white dark:border-l-blue-dark dark:border-r-blue-dark" />
                        <span className="bg-blue-dark dark:bg-white opacity-25 w-9 h-6 rounded-tr-lg" />
                    </div>
                </div>
                <button className="flex justify-center items-center">
                    <Arrow />
                </button>
            </div>
        </div>
    );
};

export default Projects;
