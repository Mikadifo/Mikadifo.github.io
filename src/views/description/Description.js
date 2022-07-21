import Navbar from '../../components/navbar/Navbar';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import portrait from './../../img/face-img.png';
import './Description.css';

const Description = () => {
    return (
        <div id="description">
            <Navbar />
            <div className="description-container">
                <div className="row p-5">
                    <div className="col col-lg-4 col-12 image-stack d-flex align-items-center justify-content-center">
                        <p className="img-back-letter">M</p>
                        <img
                            src={portrait}
                            alt="MIKADIFO"
                            className="portrait-img-front animate__animated animate__zoomIn"
                        />
                    </div>
                    <div className="col col-lg-8 col-12 d-flex align-items-center justify-content-center info-stack">
                        <div className="container about-container md-me-5">
                            <h1 className="mb-3 about-title">About Me</h1>
                            <p className="me-3">
                                I am a passionate software developer with
                                experience working on web services, web
                                applications and mobile apps.
                            </p>
                            <p className="me-3">
                                Also, I'm interested in contribuing to open
                                source projects from different developers and
                                non-profit organizations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Skills />
            <Experience />
        </div>
    );
};

export default Description;
