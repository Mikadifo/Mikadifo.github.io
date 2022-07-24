import portrait from './../../img/face-img.png';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="home-container" data-testid="home">
            <div className="row p-5 stack-container">
                <div className="col col-lg-6 col-sm-12 d-flex align-items-center vh-100">
                    <div className="container">
                        <div className="row text-center presentation-title">
                            <h1 className="animate__animated animate__fadeInDown greeting-title">
                                HEY I'M
                            </h1>
                            <h1 className="animate__animated animate__fadeInDown name-title">
                                MICHAEL
                            </h1>
                        </div>
                        <h3 className="row d-flex align-items-center justify-content-center animate__animated animate__slideInLeft fw-light mt-3 rol-subtitle text-center">
                            SOFTWARE DEVELOPER
                        </h3>
                        <div className="d-flex align-items-center justify-content-center">
                            <a
                                href="#description"
                                className="row  btn btn-outline-dark about-button p-3 mt-5"
                                data-testid="about-button"
                            >
                                MORE ABOUT ME
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-sm-12 d-none d-lg-flex align-items-center justify-content-center vh-100">
                    <p className="img-back">M</p>
                    <img
                        src={portrait}
                        alt="MIKADIFO"
                        className="portrait-img animate__animated animate__zoomIn"
                        data-testid="home-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
