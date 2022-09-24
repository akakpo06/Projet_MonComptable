import { useState } from "react";
import "./formulaire.css";
    import { useNavigate } from "react-router-dom";
    import axios from "axios";

function Message() {
        const navigate = useNavigate();
    
        const [inputs, setInputs] = useState({});
        const [errMsg, setErrMsg] = useState("");
    
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post("http://moncomptable.localhost:80/api/mail/mail.php", inputs).then(function(response) {
                if (response.data) {
                    navigate("/");
                }
            })
        }
    return(
        <main>
            <div className="modal-container contact-modal">
                <div className="right-box-container contact-box">
                    <div className="form-title">
                        <span>Vous avez des questions ?</span>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="name-surname-container">
                                <label>
                                    <span>Nom :</span>
                                    <input type="text" placeholder="Nom" name="surname" onChange={handleChange}/>
                                </label>
                                <label>
                                    <span>Prénoms :</span>
                                    <input type="text" placeholder="Prénoms" name="name" onChange={handleChange}/>
                                </label>
                            </div>
                            <label>
                                <span>E mail :</span>
                                <input type="text" placeholder="E mail" name="email" onChange={handleChange}/>
                            </label>
                            <label>
                                <span>Sujet :</span>
                                <input type="text" placeholder="Sujet" name="subject" onChange={handleChange}/>
                            </label>
                            <label>
                                <span>Message :</span>
                                <textarea placeholder="Message" name="body" onChange={handleChange}/>
                            </label>
                            <button>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Message;