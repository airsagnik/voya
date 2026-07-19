import { useEffect, useState } from "react";
import classes from "./TripTrackerWidget.module.css";

function TripTrackerWidget() {
    const [index, setIndex] = useState(0);
    const places = ["Kerela", "Rajasthan", "Japan", "Thiland", "Bali", "North East"];

    useEffect(() => {

        const intervalId = setInterval(() => {
           setIndex((prev)=>(prev+1)%places.length);
        }, 4000);

        return () => clearInterval(intervalId);

    }, []);


    return <div className={classes.trackerContainer}>
        <div>
            <h1>Tours We Are Operating Right Now!</h1>
        </div>
        <div>
            <h4>A real time view of Traverllers currently touring with us</h4>
        </div>
        <div className={classes.counterContainer}>
            <div className={classes.travellerCount}>
                <div>
                    <h1>6,820</h1>
                </div>
                <div>
                    <h3>Travellers currently on Voya Tours</h3>
                </div>
            </div>
            <div className={classes.divider}>
            </div>
            <div className={classes.travellerCount}>
                <div>
                    <h1>140</h1>
                </div>
                <div>
                    <h3>On-ground <span key={places[index]} className={classes.animatedText}>{places[index]}</span> right now</h3>
                </div>
            </div>
        </div>

    </div>
}

export default TripTrackerWidget;