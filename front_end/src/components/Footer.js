import "./Footer.css";
import localisation from "../assets/localisation.png";
import mail from "../assets/envelope-mail.png";
import phone from "../assets/phone.png";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <section className="footer">
            <div className="informations">
                <div className="description-container">
                    <div className="title">Mon comptable.com</div>
                    <div className="text">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                            qui officia deserunt mollit anim id est laborum
                        </span>
                    </div>
                </div>
                <div className="services">
                    <div className="title">
                        <span>Services</span>
                    </div>
                    <div className="line">
                        <span>Paiement de vos taxes en ligne</span>
                    </div>
                    <div className="line">
                        <span>Opérations comptables</span>
                    </div>
                    <div className="line">
                        <span>Assistance par des experts</span>
                    </div>
                </div>
                <div className="contact-infos">
                    <div className="title">
                        <span>Coordonnées</span>
                    </div>
                    <div className="line">
                        <div className="icon-container">
                            <img src={localisation} />
                        </div>
                        <div>
                            <span>Lomé,TOGO</span>
                        </div>
                    </div>
                    <div className="line">
                        <div className="icon-container">
                            <img src={mail} />
                        </div>
                        <div>
                            <span>moncomptable@gmail.com</span>
                        </div>
                    </div>
                    <div className="line">
                        <div className="icon-container">
                            <img src={phone} />
                        </div>
                        <div>
                            <span>+228 90 00 00 00</span>
                        </div>
                    </div>
                </div>
                <div className="contacts-social-networks-container">
                    <div className="social-networks">
                        <div className="social-network">
                            <a><img src={localisation} /></a>
                        </div>
                        <div className="social-network">
                            <a><img src={localisation} /></a>
                        </div>
                        <div className="social-network">
                            <a><img src={localisation} /></a>
                        </div>
                        <div className="social-network">
                            <a><img src={localisation} /></a>
                        </div>
                    </div>
                    <div className="contact-button-container">
                    <Link to="/contact">
                        <button className="btn-second-type">
                                Contacter
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                <hr />
                <div>
                    <span>&copy; copyright mon comptable.com </span>
                </div>
            </div>
        </section>
    )
}
export default Footer;