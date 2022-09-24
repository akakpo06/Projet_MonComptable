import { useState } from "react";
import "./formulaire.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

function Connexion() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [errMsg, setErrMsg] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://moncomptable.localhost:80/api/user/auth.php/`, inputs).then((response) => {

            if (response.data.status) {
                const infos = {
                    token: response.data.token,
                    id: response.data.id
                }
                window.localStorage.setItem('infos', JSON.stringify(infos))
                navigate("/dashboard");
            }       
            else{
                setErrMsg(response.data.message)
            }
        })
    }
    return(
        
        <main>
            <div className="modal-container">
                <div className="left-box-container"></div>
                <div className="right-box-container">
                    <div className="form-title">
                        <span>Veuillez entrer vos identifiants</span>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input type="email" placeholder="Adresse electronique" name="email" onChange={handleChange}/>
                            </label>
                            <label>
                                <input type="password" placeholder="Mot de passe" name="password" onChange={handleChange}/>
                            </label>
                            <button>Se Connecter</button>
                            <div className="error-container">{errMsg}</div>
                        </form>
                        <Link to="/inscription">
                            <span>Pas de compte? S'inscrire</span>
                        </Link>
                        
                        <a>Mot de passe oublié</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Connexion;