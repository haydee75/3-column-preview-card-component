import React from "react"
import Card from './Card'
import './Card.scss'

function CardContainer(props) {
    return (
        <section className="CardContainer">
            <div className="row">
                <Card imgSrcCard="./images/icon-sedans.svg" altPropCard="sedans-svg" titleCard="Sedans" textContentCard="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." ctaHrefCard="https://www.frontendmentor.io/solutions" cardColor="#E28625" ctaColorCard="#E28625" />
                <Card imgSrcCard="./images/icon-suvs.svg" altPropCard="suvs-svg" titleCard="Suvs" textContentCard="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." ctaHrefCard="https://www.frontendmentor.io/solutions" cardColor="#006971" ctaColorCard="#006971" />
                <Card imgSrcCard="./images/icon-luxury.svg" altPropCard="luxury-svg" titleCard="Luxury" textContentCard="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." ctaHrefCard="https://www.frontendmentor.io/solutions" cardColor="#004140" ctaColorCard="#004140" />
            </div>
        </section>
    )
}

export default CardContainer