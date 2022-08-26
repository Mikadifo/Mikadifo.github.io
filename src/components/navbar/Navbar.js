import SecondaryButton from '../buttons/SecondaryButton/SecondaryButton';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="container-fluid nav-container" data-testid="navbar">
            <div className="row nav-items h-100">
                <div className="col my-auto nav-brand">M</div>
                <div className="col-8 my-auto">
                    <div class="row justify-content-center">Links</div>
                </div>
                <div className="col my-auto text-end">
                    <SecondaryButton text="Email me" iconClass="bi-send-fill" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
