import React from 'react';
import CurveBottom from './curves/curveBottom';
import CurvesTop from './curves/curvesTop';

const About = () => {
    return (
        <>
            <CurvesTop />
            <div className="grid place-content-center text-white bg-[#2E66E2] px-16 pt-8 lg:pt-16 xl:pt-20 pb-14 lg:pb-20 xl:pb-24">
                <h3 className="text-center text-h3-sm lg:text-h3-md xl:text-h3-lg mb-4 lg:mb-8 font-kufam font-bold">
                    About me
                </h3>
                <p className="font-league-spartan text-p max-w-2xl">
                    As an experienced front-end software developer and
                    freelancer, my journey spans over 3 years in web
                    development. Driven by curiosity, I thrive on exploring and
                    mastering emerging technologies.
                </p>
                <p className="font-league-spartan text-p max-w-2xl mt-4 lg:mt-6">
                    My dedication to delivering innovative solutions fuels my
                    passion for building extraordinary software. Always seeking
                    new challenges and knowledge to stay ahead in this fast
                    growing industry.
                </p>
            </div>
            <CurveBottom />
        </>
    );
};

export default About;
