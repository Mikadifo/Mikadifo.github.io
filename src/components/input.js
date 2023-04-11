import React from 'react';

const Input = ({ label, type, id }) => {
    const INPUT_STYLES =
        'w-full h-full bg-white dark:bg-blue-dark rounded-bl-lg rounded-tr-lg py-2 px-4 text-blue-dark dark:text-white text-opacity-75 dark:text-opacity-75 font-league-spartan font-normal resize-none focus:outline-none focus:ring-4';

    return (
        <label htmlFor={id} className="text-h6-md lg:text-h6-lg font-bold">
            {label}
            <div className="mt-2 md:mt-3 lg:mt-4 w-full rounded-tr-lg rounded-bl-lg p-[2px] bg-gradient-to-br from-secondary via-secondary/20 to-secondary">
                {type === 'textarea' ? (
                    <textarea
                        className={INPUT_STYLES}
                        name={id}
                        id={id}
                        rows="10"
                        required
                    />
                ) : (
                    <input
                        className={INPUT_STYLES}
                        type={type}
                        name={id}
                        id={id}
                        required
                    />
                )}
            </div>
        </label>
    );
};

export default Input;
