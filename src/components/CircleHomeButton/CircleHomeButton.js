import './CircleHomeButton.css';

const CircleHomeButton = ({ visible }) => {
    if (!visible) return;

    return (
        <a href="#home" className="btn circle-btn">
            <i className="fa fa-home"></i>
        </a>
    );
};

export default CircleHomeButton;
