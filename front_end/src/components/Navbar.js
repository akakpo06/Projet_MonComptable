import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {

    const navigate = useNavigate();

    const disconnect = () => {
        const infos = JSON.parse(window.localStorage.getItem('infos'));
        axios.get(`http://moncomptable.localhost:80/api/user/disconnect.php/${infos.id}`).then((response) => {
            console.log(response.data)
            if(response.data.status) {
                window.localStorage.removeItem('infos');
                navigate("/");
            }
        })

    }
    return(
        <div className="navbar-container">
            <div className="logo-container">
                <span>mon comptable.com</span>
            </div>
            <div className="buttons-container navs">
                <Link to="/">
                    <button className="btn-second-type">
                        <span>Tableau de bord</span>
                    </button>
                </Link>
                <Link to="/tax-pay">
                    <button className="btn-first-type">
                            <span>Payer ses taxes</span>
                    </button>
                </Link>
                <Link to="/">
                    <button className="btn-first-type">
                            <span>Faire son bilan</span>
                    </button>
                </Link>
                <Link to="/">
                    <button className="btn-first-type">
                            <span>Accompagnement</span>
                    </button>
                </Link>
            </div>
            <div className="buttons-container">
                <Link to="/">
                    <button className="btn-second-type" onClick={disconnect}>
                            <span>Se déconnecter</span>
                    </button>
                </Link>
            </div>
        </div>
    )

}

export default Navbar;