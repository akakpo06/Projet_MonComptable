import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Process from "./Return-process-level";

function Payment(props) {
    
    const handler = props.handler();
    const setInputs = props.setter();
    const handleSubmit = props.submiter();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <>
            <div>
                <form onSubmit={() => handleSubmit()}>
                    <div className="double-input-container">
                        <label>
                            <span>Payer via :</span>
                            <select name="paid_by" onChange={handleChange}>
                                <optgroup>
                                    <option>Moyen de paiement</option>
                                    <option value="Tmoney">TMoney</option>
                                    <option value="Flooz">Flooz</option>
                                    <option value="Ecobank">Ecobank</option>
                                </optgroup>
                            </select>
                        </label>
                        <label>
                            <span>Numéro du compte/Numéro de téléphone :</span>
                            <input placeholder="Numéro du compte/Numéro de téléphone" name="account_number" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="double-input-container">
                        <label>
                            <span>Montant</span>
                            <input placeholder="montant" name="amount" onChange={handleChange}/>
                        </label>
                        <label>
                            <span>Année d'expiration de la carte(paiement bancaires) :</span>
                            <select name="expiry-year" onChange={handleChange} >
                                <optgroup>
                                    <option value="">Année</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                        <button className="btn-first-type">
                            <span>Valider</span>
                        </button>
                </form>
            </div>
        </>
    )
}

export default Payment;