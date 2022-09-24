import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
    return (
        <header>
            <div className="landing-page-navbar">
                <div className="logo-container">
                    <span>mon comptable.com</span>
                </div>
                <div className="navlinks-container">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Accueuil</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <Link to ="/contact">
                                    <span>Contacter</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="buttons-container">
                    <Link to="/inscription">
                        <button className="btn-first-type">
                            <span>Inscription</span>
                        </button>
                    </Link>
                    <Link to="/connexion">
                        <button className="btn-second-type">
                                <span>Connexion</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="Welcome-container">
                <div className="Welcome-text">
                    <span className="principal-title">Bienvenu(e) sur mon comptable.com</span>
                    <span className="secondary-title">Vos tâches administratives en quelques clics</span>
                </div>
            </div>
        </header>
    );
}
export default Header;