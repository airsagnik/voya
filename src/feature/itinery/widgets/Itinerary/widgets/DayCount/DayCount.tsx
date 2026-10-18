import classes from "./DayCount.module.css";

function DayCount({ days, nights }: { days: number, nights: number }) {
    return <div className={classes.dayCount}>
        <p className={classes.text}>{days}D/{nights}N</p>
    </div>
}

export default DayCount;