import PrimaryButton from './../../components/buttons/PrimaryButton/PrimaryButton';
import portrait from './../../img/face-img.png';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="row home-container" data-testid="home">
            <div className="col-7 text-center">
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
            <div className="col-5 my-auto text-center">
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
