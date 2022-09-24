import car from "../assets/coins.jpg";
import Card from "./Card";
function Services() {
    return (
        <section id="services">
            <div className="section-title-container">
                <span>Nos Services</span>
                < hr/>
            </div>
            <div className="cards-container">
                <Card src={car}>Paiement de vos impôts en ligne</Card>
                <Card src={car}>Réalisation de vos bilans mensuels et annuels</Card>
                <Card src={car}>Accompagnement par des experts comptables</Card>
            </div>
        </section>
    )
}
export default Services;