import classes from "./CentralCard.module.css";

function CentralCard() {
    return <div className={classes.centralCard}>
        <div><h1>Your Tour,</h1></div>
        <div><h1>Perfectly Personalised!</h1></div>
        <div><h4>Explore expertly curated multi-day tours</h4></div>
    </div>
}

export default CentralCard;