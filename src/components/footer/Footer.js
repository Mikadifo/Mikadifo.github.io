import PrimaryButton from '../buttons/PrimaryButton/PrimaryButton';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="row footer-action">
                <div className="col-lg-8 contact-info text-lg-start text-center pe-0 ps-0">
                    <p className="contact-title">
                        I’m willing to collaborate with you.
                    </p>
                    <p className="contact-paragraph">
                        Contact me in order to make ideas become real.
                    </p>
                </div>
                <div className="col-lg-4 text-center text-lg-end my-auto pt-5 pt-lg-0 pe-0 ps-0">
                    <a href="mailto:mikadifopadillaheredia@gmail.com">
                        <PrimaryButton
                            text="Email me"
                            iconClass="bi-send-fill"
                            hoverIconClass="bi-send"
                        />
                    </a>
                </div>
            </div>
            <footer
                className="text-center footer-container"
                data-testid="footer"
            >
                <div className="row h-100">
                    <div className="col-sm-6 my-auto text-sm-start copyright-text text-center">
                        © 2022 Mikadifo. All rights reserved.
                    </div>
                    <div className="col-sm-6 my-auto text-sm-end footer-icons">
                        <a
                            className="btn btn-link btn-floating btn-lg me-3"
                            href="https://github.com/Mikadifo"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            rel="noreferer"
                            data-testid="footer-gh-icon"
                        >
                            <i className="fab fa-github" />
                        </a>
                        <a
                            className="btn btn-link btn-floating btn-lg ms-3 me-3"
                            href="https://www.linkedin.com/in/mikadifo"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            rel="noreferer"
                            data-testid="footer-ln-icon"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        <a
                            className="btn btn-link btn-floating btn-lg ms-3"
                            href="https://twitter.com/Mikadifo2"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            rel="noreferer"
                            data-testid="footer-tw-icon"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
