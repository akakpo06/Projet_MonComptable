import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Process from "./Return-process-level";
import "./declaration.css"

function Declaration(props) {

    
    const handler = props.handler();
    const setInputs = props.setter();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <>
            <div>
                <form>
                    <div className="double-input-container">
                        <label>
                            <span>Nature de l'impôt :</span>
                            <select name="nature" onChange={handleChange}>
                                <optgroup>
                                    <option value="">Nature de l'impôt</option>
                                    <option value="RSTS(Retenue Sur Salaire)">Retenu Sur Salaire</option>
                                    <option value="Impôt sur les sociétés">Impôt sur les sociétés</option>
                                </optgroup>
                            </select>
                        </label>
                        <label>
                            <span>Néant :</span>
                            <select name="neant" onChange={handleChange}>
                                <optgroup>
                                    <option value={0}>Non</option>
                                    <option value={1}>Oui</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                    <div className="double-input-container">
                        <label>
                            <span>Période :</span>
                            <select name="period" onChange={handleChange}>
                                <optgroup>
                                    <option value="">Période</option>
                                    <option value="janvier">Janvier</option>
                                    <option value="fevrier">Février</option>
                                </optgroup>
                            </select>
                        </label>
                        <label>
                            <span>Année :</span>
                            <select name="year" onChange={handleChange}>
                                <optgroup>
                                    <option value="">Année</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </optgroup>
                            </select>
                        </label>
                    </div>
                    <div className="amount-container">
                        <span>Montant dû :</span>
                    </div>
                    <div className="form-buttons-container">
                        <Link to="">
                            <button className="btn-first-type">
                                    <span>Imprimer</span>
                            </button>
                        </Link>
                        <Link to="">
                            <button className="btn-first-type">
                                <span>Annexes</span>
                            </button>
                        </Link>
                        <Link to="">
                            <button type="button" className="btn-first-type" onClick={() => handler("+")}>
                                <span>Suivant</span>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Declaration;