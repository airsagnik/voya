import classes from "./TripDurationConfiguration.module.css";

function TripDurationConfigurationDisplay() {
    return <div className={classes.imageSelectorHolder}>
        <div className={classes.tripDurationSelector}>
            <img className={classes.imageSelector} src="https://plus.unsplash.com/premium_photo-1661957679387-5a6bfaaa8e30?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            <p className={classes.overlayDuration}>6 days</p>
        </div>
        <p className={classes.zeroMarginPadding}>Starting from</p>
        <h6 className={classes.zeroMarginPadding}>Rs. 1,32,865</h6>
    </div>

}

export default TripDurationConfigurationDisplay;