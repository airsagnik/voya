import classes from "./TripListingCard.module.css";
import { IoMdCall } from "react-icons/io";


function TripListingCard()
{
    return <div className={classes.cardHolder}>
        <div><img className={classes.destinationImage} src="https://media1.thrillophilia.com/filestore/uh9a3pirss5x98eg0bzufs9s5nyn_shutterstock_2140670125.jpg?w=580&dpr=2" alt="" /></div>
        <br />
        <div className={classes.tripDetail}>
            <div>7 days and 6 nights</div>
            <div><span className={classes.rating}>4.6</span> (9)</div>
        </div>
        <br />
        <div>Journey Through Iceland Hidden Tresures | Group tour package</div>
        <br />
        <div className={classes.includedDestinations}> <span>3D</span> <span>Oslo</span> <span>3D</span> <span>Rovaneimi</span> </div>
        <div className={classes.priceContainer}>
            <div className={classes.actualPrice}> INR 3,06,215</div>
            <br />
            <div className={classes.discount}>Save INR 75,000</div>
        </div>
        <div><h3>INR 2,30,315</h3></div>
        <div className={classes.contactButtonHolder}>
            <div className={classes.callButton}><IoMdCall /></div>
            <br />
            <div className={classes.requestCallback}>Request Callback</div>
        </div>
    </div>
    
}

export default TripListingCard;