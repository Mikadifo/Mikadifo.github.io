import React from 'react';
import Button from './button';

const CallToAction = () => {
    return (
        <div className="grid place-content-center text-blue-dark dark:text-white font-kufam px-16 my-14 lg:my-28 xl:my-32">
            <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4">
                Hey, I'm Mikadifo
            </h3>
            <h2 className="text-center text-h2-sm lg:text-h2-md xl:text-h2-lg opacity-75 mb-8 font-bold">
                Front End Developer
            </h2>
            <div className="flex justify-center">
                <Button>Contact me</Button>
            </div>
        </div>
    );
};

export default CallToAction;
