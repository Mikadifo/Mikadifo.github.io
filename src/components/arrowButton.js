import React from 'react';
import arrow from './../images/arrow.svg';

const ArrowButton = ({ action, right }) => {
    return (
        <button
            type="button"
            onClick={action}
            className={`hover:opacity-75 ${right ? 'rotate-180' : ''}`}
        >
            <img src={arrow} alt="See previous project" />
        </button>
    );
};

export default ArrowButton;
