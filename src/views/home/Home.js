import { useEffect, useRef } from 'react';
import './Home.css';
import useIntersection from './../../hooks/useIntersection';

const Home = ({ setShowHomeBack }) => {
    const ref = useRef();
    const inViewport = useIntersection(ref);
    useEffect(() => {
        setShowHomeBack(!inViewport);
    });

    return (
        <div id="home" className="home-container">
            <h1 className="animate__animated animate__fadeInDown">Hello,</h1>
            <h1 className="ms-5 animate__animated animate__fadeInDown">
                I'm Michael Padilla
            </h1>
            <h3 className="animate__animated animate__slideInLeft">
                Software Developer
            </h3>
            <a href="#description" className="btn btn-outline-dark" ref={ref}>
                More about me
            </a>
            <div className="img-back" />
        </div>
    );
};

export default Home;
