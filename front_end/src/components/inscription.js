import { useState } from "react";
import "./formulaire.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Inscription() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [errMsg, setErrMsg] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputs["conf-password"] === inputs["password"]) {
            axios.post("http://moncomptable.localhost:80/api/user/register.php", inputs).then(function(response) {

                if (response.data.status) {
                    navigate("/connexion");
                }
                else{
                    setErrMsg(response.data.message)
                }
                console.log(response.data)
            }).catch(err => console.log(err))
        }
        else{
            setErrMsg("Vots mots de passes ne correspondent pas")
        }
    }

    return(
        <main>
            <div className="modal-container">
                <div className="left-box-container"></div>
                <div className="right-box-container">
                    <div className="form-title">
                        <span>Veuillez entrer vos informations</span>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input type="text" placeholder="Numéro d'identification Fiscal" name="nif" onChange={handleChange}/>
                            </label>
                            <label>
                                <input type="email" placeholder="Adresse electronique" name="email" onChange={handleChange}/>
                            </label>
                            <label>
                                <input type="password" placeholder="Mot de passe" name="password" onChange={handleChange}/>
                            </label>
                            <label>
                                <input type="password" placeholder="Confirmer le mot de passe" name="conf-password" onChange={handleChange} />
                            </label>
                            <button>S'inscrire</button>
                            <div className="error-container">{errMsg}</div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Inscription;