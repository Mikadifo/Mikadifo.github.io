import React from 'react';

const Button = ({ disabled, children, link = false, to = '' }) => {
    const buttonStyles =
        'text-white text-h6-md lg:text-h6-lg py-4 px-8 lg:py-6 lg:px-10 bg-primary rounded-tl-lg rounded-br-lg font-bold shadow-light dark:shadow-dark disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90';
    return link ? (
        <a href={to} className={buttonStyles} disabled={disabled}>
            {children}
        </a>
    ) : (
        <button className={buttonStyles} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
