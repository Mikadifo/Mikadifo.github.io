import './SecondaryButton.css';

const SecondaryButton = ({ text, iconClass }) => {
    return (
        <>
            <button className="secondary-btn">
                {text} <i className={`bi ${iconClass} sec-btn-icon`}></i>
            </button>
        </>
    );
};

export default SecondaryButton;
