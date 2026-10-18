import classes from "./DayWiseDestination.module.css";

function DayWiseDestination() {
    return <div className={classes.destinationCountHolder}>
      <div className={classes.durationDisplay}>
        2
      </div>
      <div className={classes.destinationDisplay}>
        <div className={classes.cityName}>Days in</div>
        <div className={classes.cityName}>Tromso</div>
      </div>
    </div>
}

export default DayWiseDestination;