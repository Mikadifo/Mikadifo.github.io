import { useState } from 'react';
import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import './Navbar.css';

const Navbar = ({ currentItemHash }) => {
    const [isTogglerActive, setTogglerActive] = useState(false);

    const navbarToggler = () => {
        return (
            <button
                className="nav-toggler navbar-toggler p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i
                    className={
                        isTogglerActive
                            ? 'bi bi-distribute-vertical'
                            : 'bi bi-list'
                    }
                    onClick={() => setTogglerActive(!isTogglerActive)}
                />
            </button>
        );
    };

    return (
        <div
            className="container-fluid nav-container"
            style={{ height: isTogglerActive ? '100vh' : '108px' }}
            data-testid="navbar"
        >
            <div className="row h-100">
                <a
                    className={`col my-auto nav-brand ${
                        isTogglerActive && 'col-6'
                    }`}
                    data-testid="nav-brand"
                    href="#home"
                >
                    M
                </a>
                {isTogglerActive && (
                    <div className="col-6 my-auto justify-content-end d-flex">
                        {navbarToggler()}
                    </div>
                )}
                <div
                    className={`col-lg-8 col-sm-2 col my-auto text-center mx-auto ms-auto order-last ${
                        isTogglerActive && 'h-75'
                    }`}
                >
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid justify-content-end">
                            {!isTogglerActive && navbarToggler()}
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNavAltMarkup"
                            >
                                <div className="navbar-nav mx-auto">
                                    <a
                                        className={`nav-link pe-3 ${
                                            currentItemHash ===
                                                '#description' && 'active-link'
                                        }`}
                                        aria-current="page"
                                        href="#description"
                                        data-testid="nav-item-about"
                                    >
                                        About Me
                                    </a>
                                    <a
                                        className={`nav-link ps-3 pe-3 ${
                                            currentItemHash === '#projects' &&
                                            'active-link'
                                        }`}
                                        href="#projects"
                                        data-testid="nav-item-pro"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        className={`nav-link ps-3 pe-3 ${
                                            currentItemHash === '#experience' &&
                                            'active-link'
                                        }`}
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
                                        className={`nav-link ps-3 d-s-none ${
                                            !isTogglerActive && 'd-sm-none'
                                        }`}
                                        href="mailto:mikadifopadillaheredia@gmail.com"
                                        target="_blank"
                                        rel="noreferer"
                                    >
                                        Email me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div
                    className={`col my-auto text-end order-lg-last d-none ${
                        isTogglerActive ? 'd-none' : 'd-sm-block'
                    }`}
                >
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
