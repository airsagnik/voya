import TripDurationConfigurationDisplay from "./TripDurationConfiguration";
import classes from "./TripConfigurationDisplay.module.css";
import RouteConfiguration from "./RouteConfiguration";

function TripConfigurationDisplay() {
    return <div>
        <div>Choose Trip Destination</div>
        <div className={classes.tripDurationSelectorLayout}>
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
             <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
             <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
             <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
            <TripDurationConfigurationDisplay />
        </div>
        <div>
            <div>Destination Routes</div>
            <div className={classes.destinationRoutes}>
                <RouteConfiguration/>
                <RouteConfiguration/>
                <RouteConfiguration/>
                <RouteConfiguration/>
                <RouteConfiguration/>
            </div>
        </div>
    </div>
}

export default TripConfigurationDisplay;