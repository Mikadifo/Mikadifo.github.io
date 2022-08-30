import PrimaryButton from './../../components/buttons/PrimaryButton/PrimaryButton';
import portrait from './../../img/face-img.png';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="row home-container" data-testid="home">
            <div className="col-xxl-7 col-lg-6 text-center ps-0 pe-0">
                <div>
                    <div className="greeting-title">Hey there, I'm Michael</div>
                    <div className="rol-subtitle">
                        Fullstack Software Developer
                    </div>
                    <a href="#description" data-testid="about-button">
                        <PrimaryButton
                            text="More about me"
                            iconClass="bi bi-caret-down-fill"
                            hoverIconClass="bi bi-caret-down"
                        />
                    </a>
                </div>
            </div>
            <div className="col-xxl-5 col-lg-6 order-lg-last order-first mb-lg-0 mb-5 align-items-center justify-content-center d-flex">
                <img
                    src={portrait}
                    alt="MIKADIFO"
                    className="portrait-img"
                    data-testid="home-img"
                />
            </div>
        </div>
    );
};

export default Home;
