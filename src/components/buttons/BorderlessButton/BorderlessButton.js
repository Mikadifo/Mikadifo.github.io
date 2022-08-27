import { useState } from 'react';
import './BorderlessButton.css';

const BorderlessButton = ({ text, iconClass, hoverIconClass }) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <button
            className={`borderless-btn ${active && 'bls-btn-active'} ${
                hover && 'bls-btn-hover'
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onMouseOut={() => {
                setActive(false);
                setHover(false);
            }}
        >
            <i
                className={`${hover ? hoverIconClass : iconClass} bls-btn-icon`}
            />
            {text}
        </button>
    );
};

export default BorderlessButton;
