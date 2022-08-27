import {
    descriptionParagraph1,
    descriptionParagraph2,
} from '../../constants/texts';
import './Description.css';

const Description = () => {
    return (
        <div
            className="row description-container h-100"
            id="description"
            data-testid="description"
        >
            <div className="col-4 my-auto text-center">
                <h1 className="about-title">About Me</h1>
            </div>
            <div className="container col-2 justify-content-center d-flex">
                <div className="about-separator" />
            </div>
            <div className="col-6 my-auto">
                <div className="container about-container">
                    <p className="me-3">{descriptionParagraph1}</p>
                    <br />
                    <p className="me-3">{descriptionParagraph2}</p>
                </div>
            </div>
        </div>
    );
};

export default Description;
