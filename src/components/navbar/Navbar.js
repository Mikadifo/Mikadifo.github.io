import './Navbar.css';

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg bg-light sticky-top ps-5 pe-5"
            data-testid="navbar"
        >
            <div className="container-fluid">
                <a
                    className="navbar-brand brand-title"
                    href="#home"
                    data-testid="nav-brand"
                >
                    MIKADIFO
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto nav-items">
                        <a
                            className="nav-link"
                            href="#description"
                            data-testid="nav-item-about"
                        >
                            About Me
                        </a>
                        <a
                            className="nav-link"
                            href="#skills"
                            data-testid="nav-item-skills"
                        >
                            Skills
                        </a>
                        <a
                            className="nav-link"
                            href="#projects"
                            data-testid="nav-item-pro"
                        >
                            Projects
                        </a>
                        <a
                            className="nav-link"
                            href="#experience"
                            data-testid="nav-item-exp"
                        >
                            Experience
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
