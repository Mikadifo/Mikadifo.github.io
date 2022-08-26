import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid nav-container" data-testid="navbar">
            <div className="row h-100">
                <div className="col my-auto nav-brand">M</div>
                <div className="col-8 my-auto text-center mx-auto ms-auto">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                                class="collapse navbar-collapse"
                                id="navbarNavAltMarkup"
                            >
                                <div class="navbar-nav mx-auto">
                                    <a
                                        class="nav-link pe-3"
                                        aria-current="page"
                                        href="#"
                                    >
                                        About me
                                    </a>
                                    <a class="nav-link ps-3 pe-3" href="#">
                                        Projects
                                    </a>
                                    <a class="nav-link ps-3 pe-3" href="#">
                                        Experience
                                    </a>
                                    <a class="nav-link ps-3" href="#">
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col my-auto text-end">
                    <SecondaryButton text="Email me" iconClass="bi-send-fill" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
