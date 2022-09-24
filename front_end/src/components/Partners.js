import eg from "../assets/EG.png";
import otr from "../assets/otr.png";

function Partners() {
    return(
        <section className="partners-sec">
            <div className="section-title-container">
                <span>Nos partenaires</span>
                < hr/>
            </div>
            <div className="partners">
                <div className="partner-logo">
                    <img src={eg} />
                </div>
                <div className="partner-logo">
                    <img src={otr} />
                </div>
            </div>
        </section>
    )
}

export default Partners;