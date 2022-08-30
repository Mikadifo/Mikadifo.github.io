import { useState } from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ text, iconClass, hoverIconClass }) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <>
            <button
                key="unique"
                className={`primary-btn ${active && 'pri-btn-active'}`}
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
                    } pri-btn-icon`}
                />
            </button>
        </>
    );
};

export default PrimaryButton;
