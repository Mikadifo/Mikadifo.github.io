import { useState } from 'react';
import './BorderlessButton.css';

const BorderlessButton = ({
    text,
    textClass,
    iconClass,
    iconCustomClass,
    hoverIconClass,
    disabled,
    iconToEnd,
    action,
}) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <button
            className={`borderless-btn ${active && 'bls-btn-active'} ${
                hover & !disabled && 'bls-btn-hover'
            } ${disabled && 'bls-btn-disabled'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onMouseOut={() => {
                setActive(false);
                setHover(false);
            }}
            onClick={action}
        >
            {iconToEnd ? (
                <>
                    <span className={textClass}>{text}</span>
                    <i
                        className={`${iconCustomClass} ${
                            hover && !disabled ? hoverIconClass : iconClass
                        } bls-btn-icon bls-btn-right`}
                    />
                </>
            ) : (
                <>
                    <i
                        className={`${iconCustomClass} ${
                            hover && !disabled ? hoverIconClass : iconClass
                        } bls-btn-icon bls-btn-left`}
                    />
                    <span className={textClass}>{text}</span>
                </>
            )}
        </button>
    );
};

export default BorderlessButton;
