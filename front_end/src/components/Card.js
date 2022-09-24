import React from "react";
import "./Card.css"

function Card (props) {
        return(
            <>
                <div className="card">
                    <div className="card-icon-container">
                        <img src={props.src} alt="image" />
                    </div>
                    <div className="card-text">
                        <span>{props.children}</span>
                    </div>
                </div>
            </>
        )
}

export default Card;