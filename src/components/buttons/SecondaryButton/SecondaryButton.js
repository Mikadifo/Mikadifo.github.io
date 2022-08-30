import { useState } from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({ text, iconClass, hoverIconClass }) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <>
            <button
                className={`secondary-btn ${active && 'sec-btn-active'} ${
                    hover && 'sec-btn-hover'
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
                {text}
                <i
                    className={`${
                        hover ? hoverIconClass : iconClass
                    } sec-btn-icon`}
                />
            </button>
        </>
    );
};

export default SecondaryButton;
