import Navbar from '../../components/navbar/Navbar';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import portrait from './../../img/face-img.png';
import './Description.css';
import {
    descriptionParagraph1,
    descriptionParagraph2,
} from '../../constants/texts';

const Description = () => {
    return (
        <>
            <div id="description">
                <Navbar />
                <div
                    className="description-container"
                    data-testid="description"
                >
                    <div className="row p-5">
                        <div className="col col-lg-4 col-12 image-stack d-flex align-items-center justify-content-center">
                            <p className="img-back-letter">M</p>
                            <img
                                src={portrait}
                                alt="MIKADIFO"
                                className="portrait-img-front animate__animated animate__zoomIn"
                                data-testid="description-img"
                            />
                        </div>
                        <div className="col col-lg-8 col-12 d-flex align-items-center justify-content-center info-stack">
                            <div className="container about-container md-me-5">
                                <h1 className="mb-3 about-title">ABOUT ME</h1>
                                <p className="me-3">{descriptionParagraph1}</p>
                                <p className="me-3">{descriptionParagraph2}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills />
                <Projects />
                <Experience />
            </div>
        </>
    );
};

export default Description;
