import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="container-fluid nav-container" data-testid="navbar">
            <div className="row nav-items h-100">
                <div className="col my-auto nav-brand">M</div>
                <div className="col-10 my-auto">
                    <div class="row justify-content-center">Links</div>
                </div>
                <div className="col my-auto">Email me</div>
            </div>
        </nav>
    );
};

export default Navbar;
