import React from 'react';
import Button from './button';

const CallToAction = () => {
    return (
        <div
            className="grid place-content-center text-blue-dark dark:text-white font-kufam px-16 my-14 lg:my-28 xl:my-32"
            id="home"
        >
            <h1 className="text-center text-h2-sm lg:text-h2-md xl:text-h2-lg opacity-75 mb-8 font-bold">
                Front End Developer
            </h1>
            <h2 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 -order-1">
                Hey, I'm Mikadifo
            </h2>
            <a href="#contact-form" className="flex justify-center">
                <Button>Contact me</Button>
            </a>
        </div>
    );
};

export default CallToAction;
