import * as React from 'react';

const Arrow = ({ left }) => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${left ? 'rotate-180' : ''} h-9`}
        >
            <path
                d="M38.5496 0.026698V0H28.138L33.3438 9.15684L33.5307 9.4505L37.4017 16.2848L28.1113 32.5962H38.6831L48.0001 16.3115L38.5496 0.026698Z"
                className="fill-primary"
            />
        </svg>
    );
};

export default Arrow;
