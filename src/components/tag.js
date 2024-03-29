import React from 'react';

const Tag = ({ left, data }) => {
    const positionClasses = () => {
        if (left)
            return 'rounded-r-lg pl-16 md:pl-32 xl:pl-64 pr-8 md:pr-16 lg:pr-20 bg-gradient-to-r md:mr-12 lg:mr-16 md:hover:translate-x-6 hover:transition active:-translate-x-6';

        return 'rounded-l-lg pr-16 md:pr-32 xl:pr-64 order-last pl-8 md:pl-16 lg:pl-20 bg-gradient-to-l md:ml-12 lg:ml-16 md:hover:-translate-x-6 hover:transition active:translate-x-6';
    };

    return (
        <div
            className={`flex items-center duration-700 text-white tag-container ${
                left ? '' : 'justify-end'
            }`}
        >
            <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className={`from-secondary/60 dark:from-blue-dark to-secondary dark:to-secondary py-4 md:py-8 lg:py-12 min-w-[20rem] lg:min-w-[30rem] xl:min-w-[41rem] ${positionClasses()}`}
            >
                <h4 className="font-kufam text-h4-sm lg:text-h4-md xl:text-h4-lg">
                    {data.institution}
                </h4>
                <p className="text-p font-league-spartan">{data.role}</p>
                <p className="text-[12] md:text-[16] opacity-75 mt-3 font-league-spartan">
                    {data.date}
                </p>
            </a>
            <p
                className={`hidden md:block ${
                    left ? 'md:mr-32 xl:mr-64' : 'md:ml-32 xl:ml-64'
                } text-p opacity-75 font-league-spartan tag-description text-blue-dark dark:text-white`}
            >
                {data.description}
            </p>
        </div>
    );
};

export default Tag;
