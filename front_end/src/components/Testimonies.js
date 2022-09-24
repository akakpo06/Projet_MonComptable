import arrow from "../assets/arrow.png";
import quote from "../assets/guillemets.png"
import "./Testimonies.css"

function Testimony() {
    return(
        <section>
            <div className="section-title-container">
                <span>Ils sont satisfaits</span>
                < hr/>
            </div>
            <div className="testimony-box-container">
                <div className="arrow-container">
                    <img src={arrow} />
                </div>
                <div className="testimony-box">
                    <div className="testimony-quotes">
                        <div className="quoter open">
                            <img src={quote} />
                        </div>
                        <div className="testimony-text">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            </span>
                        </div>
                        <div className="quoter close">
                            <img src={quote} />
                        </div>
                    </div>
                    <div className="testifier">
                        <span className="name">Vanio Lines</span>
                        <span className="title">Entrepreneur</span>
                    </div>
                </div>
                <div className="arrow-container right">
                    <img src={arrow} />
                </div>
            </div>
        </section>
    )
}

export default Testimony;