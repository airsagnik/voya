import classes from "./RatingDisplay.module.css";
import RatingWidget from "./RatingWidget";

function RatingDisplay() {
    return <div className={classes.ratingDisplay}>
        <div>
            Book With Confidence
        </div>
        <div className={classes.rating}>
            <RatingWidget rating={4.5} agency={"Google"} linkToLogoImage={"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_1920,c_limit/google-logo.jpg"} />
            <RatingWidget rating={4.6} agency={"Trip Advisor"} linkToLogoImage={"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_1920,c_limit/google-logo.jpg"} />
            <RatingWidget rating={4.7} agency={"Smart customer"} linkToLogoImage={"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_1920,c_limit/google-logo.jpg"} />
            <RatingWidget rating={4.8} agency={"Reviews.IO"} linkToLogoImage={"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_1920,c_limit/google-logo.jpg"} />
        </div>
    </div>
}

export default RatingDisplay;