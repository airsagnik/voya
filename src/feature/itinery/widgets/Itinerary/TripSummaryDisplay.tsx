import DayCount from "./widgets/DayCount/DayCount";
import DayWiseDestination from "./widgets/DayWiseDestination/DayWiseDestination";
import IconWithText from "./widgets/IconWithText/IconWithText";
import classes from "./TripSummaryDisplay.module.css";

function TripSummaryDisplay() {
    return <div>
        <div>
            <h1>Norway Scenic Escape | Oslo. Bergen & Alesund</h1>
        </div>

        <div className={classes.tripDuration}>
            <DayCount days={8} nights={7} />
            <DayWiseDestination />
            <DayWiseDestination />
            <DayWiseDestination />
        </div>

        <div>
            <IconWithText text={"TransferIncluded"} />
            <IconWithText text={"TransferIncluded"} />
        </div>
    </div>
}

export default TripSummaryDisplay;