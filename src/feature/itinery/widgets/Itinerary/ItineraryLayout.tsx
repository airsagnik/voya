import TripSummaryDisplay from "./TripSummaryDisplay";
import classes from "./ItineryLayout.module.css";

function ItineraryLayout() {
    return <div className={classes.itineraryLayout}>
        <div className={classes.itineraryDisplay}>
            <TripSummaryDisplay />
        </div>
        <div className={classes.itineraryEnquiry}>
           hELL
        </div>
    </div>
}

export default ItineraryLayout;