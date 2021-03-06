import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer
                className="text-center text-white foot-icons footer-container"
                data-testid="footer"
            >
                <div className="container pt-3">
                    <section className="mb-3">
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://twitter.com/Mikadifo2"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            data-testid="footer-tw-icon"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/mikadifo"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            data-testid="footer-ig-icon"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/mikadifo"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            data-testid="footer-ln-icon"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/Mikadifo"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            data-testid="footer-gh-icon"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>
                <div className="text-center text-dark p-3 copyright-text">
                    ?? 2022 Copyright:{' '}
                    <a
                        className="text-dark"
                        href="https://mikadifo.com"
                        data-testid="copy-mika"
                    >
                        Mikadifo
                    </a>
                    <br />?? 2022 Design:{' '}
                    <a
                        className="text-dark"
                        href="https://www.instagram.com/foraneoblack"
                        target="_blank"
                        data-testid="copy-david"
                    >
                        ForaneoBlack
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
