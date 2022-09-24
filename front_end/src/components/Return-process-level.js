import "./process.css";
import exit from "../assets/left-arrow.png"
// import { use } from "react-router-dom";

function Process(props) {

    const handler = props.handler();

    return(
        <div className="return-state-container">
            <div className="return-button-container">
                    <button onClick={() => handler("-")}>
                        <img src={exit} />
                    </button>
            </div>
            <div className="state-container">
                <div className="circle circle-line">
                    <span>Dépôt des documents</span>
                </div>
                <div className="circle circle-line">
                    <span>Déclarations</span>
                </div>
                <div className="circle">
                    <span>Paiement</span>
                </div>
            </div>
        </div>
    )
}

export default Process;