import React from "react";

const Navbar = () => {
    return (
        <div>
            <div className="barraMenu">
                <nav className="navbar col-12 navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">ELECTRÓNICA ALONSO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">¿Quiénes somos?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;