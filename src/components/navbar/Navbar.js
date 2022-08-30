import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid nav-container" data-testid="navbar">
            <div className="row h-100">
                <a
                    className="col my-auto nav-brand"
                    data-testid="nav-brand"
                    href="#home"
                >
                    M
                </a>
                <div className="col-lg-8 col-2 my-auto text-center mx-auto ms-auto order-last">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid justify-content-end">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNavAltMarkup"
                            >
                                <div className="navbar-nav mx-auto">
                                    <a
                                        className="nav-link pe-3"
                                        aria-current="page"
                                        href="#description"
                                        data-testid="nav-item-about"
                                    >
                                        About Me
                                    </a>
                                    <a
                                        className="nav-link ps-3 pe-3"
                                        href="#projects"
                                        data-testid="nav-item-pro"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        className="nav-link ps-3 pe-3"
                                        href="#experience"
                                        data-testid="nav-item-exp"
                                    >
                                        Experience
                                    </a>
                                    <a
                                        className="nav-link ps-3"
                                        href="https://blog.mikadifo.com"
                                        target="_blank"
                                        rel="noreferer"
                                        data-testid="nav-item-blog"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        className="nav-link ps-3 d-sm-none"
                                        href="mailto:mikadifopadillaheredia@gmail.com"
                                        target="_blank"
                                        rel="noreferer"
                                        data-testid="nav-item-blog"
                                    >
                                        Email me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col my-auto text-end order-lg-last d-sm-block d-none">
                    <a href="mailto:mikadifopadillaheredia@gmail.com">
                        <SecondaryButton
                            text="Email me"
                            iconClass="bi-send-fill"
                            hoverIconClass="bi-send"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
