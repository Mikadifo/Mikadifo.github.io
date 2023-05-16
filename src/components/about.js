import React from 'react';
import CurveBottom from './curves/curveBottom';
import CurvesTop from './curves/curvesTop';

const About = () => {
    return (
        <>
            <CurvesTop />
            <div className="grid place-content-center text-blue-dark bg-secondary px-16 pt-8 lg:pt-16 xl:pt-20 pb-14 lg:pb-20 xl:pb-24">
                <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 lg:mb-8 font-kufam font-bold">
                    About me
                </h3>
                <p className="font-league-spartan pacity-75 text-p max-w-xs">
                    I am a passionate front-end software developer, with more
                    than 3 years of experience.
                </p>
                <p className="font-league-spartan pacity-75 text-p max-w-xs mt-4 lg:mt-6">
                    I love exploring new ideas and learning new technologies.
                </p>
            </div>
            <CurveBottom />
        </>
    );
};

export default About;
