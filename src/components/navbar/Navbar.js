import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import './Navbar.css';

const Navbar = () => {
    return (
        <div
            className="container-fluid nav-container nav-frame"
            data-testid="navbar"
        >
            <div className="row h-100">
                <a
                    className="col my-auto nav-brand"
                    data-testid="nav-brand"
                    href="#home"
                >
                    M
                </a>
                <div className="col-8 my-auto text-center mx-auto ms-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
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
