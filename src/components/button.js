import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="text-white text-h6-md lg:text-h6-lg py-4 px-8 bg-primary rounded-tl-lg rounded-br-lg font-bold shadow-light dark:shadow-dark">
            {children}
        </button>
    );
};

export default Button;
