import React from "react"
import PropTypes from "prop-types"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor
    }

    return (
        <div className="col" style={styles}>
            <img src={props.imgSrcCard} alt={props.altPropCard}/>
            <h2>{props.titleCard}</h2>
            <p className="text">{props.textContentCard}</p>
            <a className="action primary" href={props.ctaHrefCard}><span style={{color: props.ctaColorCard}} >{props.ctaTextCard}</span></a>
        </div>
    )
}

Card.propTypes = {
    imgSrcCard: PropTypes.string.isRequired,
    altPropCard: PropTypes.string.isRequired,
    titleCard: PropTypes.string.isRequired,
    textContentCard: PropTypes.string.isRequired,
    ctaHrefCard: PropTypes.string.isRequired,
    ctaTextCard: PropTypes.string.isRequired
}

Card.defaultProps = {
    ctaTextCard: "Learn more"
}

export default Card