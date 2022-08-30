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
            <div className="col-lg-4 my-auto text-center">
                <h1 className="about-title">About Me</h1>
            </div>
            <div className="about-sep-container col-2 ps-0 pe-0 m-0 justify-content-center d-flex">
                <div className="about-separator" />
            </div>
            <div className="col-lg-6 my-auto ps-0 m-0">
                <div className="about-container ps-0 pe-0 m-0">
                    <p className="me-lg-3">{descriptionParagraph1}</p>
                    <br />
                    <p className="me-lg-3">{descriptionParagraph2}</p>
                </div>
            </div>
        </div>
    );
};

export default Description;
