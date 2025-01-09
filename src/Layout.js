import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="home">
                                    <img src="logo.jpg" width="50px" height="50px" alt="Logo" />
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex mx-auto" role="search" style={{ maxWidth: '500px', width: '100%' }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="About">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="Location">Location</a></li>
                            <li className="nav-item"><a className="nav-link" href="Registration">Register</a></li>
                            <li className="nav-item"><a className="nav-link" href="Login">Login</a></li>
                            <li className="nav-item"><a className="nav-link" href="Cart">Cart</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
