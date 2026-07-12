import classes from "./IconTextSelector.module.css";
import JapanImage from "../../../assets/icons/itsukushima.png";

function IconTextSelector({ title, isTrending }: { title: string, isTrending: boolean }) {
    return <div className={classes.iconTextSelectorHolder}>
        {isTrending ? <div className={classes.badge}> <TrendingOverlay /> </div> : <div></div>}
        {isTrending ? <br /> : <div></div>}
        <div className={classes.iconDisplay}><img src={JapanImage} width={60} height={50} alt="" /></div>
        <div className={classes.textDisplay}><h3>{title}</h3></div>
    </div>;
}

function TrendingOverlay() {
    return <div className={classes.trending}>
        Trending
    </div>
}

export default IconTextSelector;