import { useEffect, useRef } from 'react';
import './Home.css';
import useIntersection from './../../hooks/useIntersection';
import portrait from './../../img/face-img.png';

const Home = ({ setShowHomeBack }) => {
    const ref = useRef();
    const inViewport = useIntersection(ref);
    useEffect(() => {
        setShowHomeBack(!inViewport);
    });

    return (
        <div id="home" className="home-container">
            <div className="hstack p-5 stack-container" ref={ref}>
                <div className="vstack gap-5 align-items-center justify-content-center">
                    <div className="text-center presentation-title">
                        <h1 className="animate__animated animate__fadeInDown greeting-title">
                            HEY I'M
                        </h1>
                        <h1 className="animate__animated animate__fadeInDown name-title">
                            MICHAEL
                        </h1>
                    </div>
                    <h3 className="animate__animated animate__slideInLeft fw-light">
                        SOFTWARE DEVELOPER
                    </h3>
                    <a
                        href="#description"
                        className="btn btn-outline-dark about-button p-3"
                    >
                        MORE ABOUT ME
                    </a>
                </div>
                <div className="image-stack d-flex align-items-center justify-content-center">
                    <p className="img-back">M</p>
                    <img
                        src={portrait}
                        alt="MIKADIFO"
                        className="portrait-img animate__animated animate__zoomIn"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
