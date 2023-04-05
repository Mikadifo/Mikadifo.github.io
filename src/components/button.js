import * as React from 'react';

const Button = ({ children }) => {
    return (
        <button className="text-white text-h6-md lg:text-h6-lg py-4 px-8 bg-primary rounded-tl-lg rounded-br-lg font-bold drop-shadow-light dark:drop-shadow-dark">
            {children}
        </button>
    );
};

export default Button;
