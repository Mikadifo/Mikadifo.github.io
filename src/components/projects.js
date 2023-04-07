import * as React from 'react';
import ProjectCard from './projectCard';

const Projects = () => {
    return (
        <div className="text-blue-dark dark:text-white">
            <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 font-kufam">
                Projects
            </h3>
            <ProjectCard />
        </div>
    );
};

export default Projects;
