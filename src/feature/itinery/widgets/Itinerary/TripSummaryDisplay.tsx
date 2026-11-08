import DayCount from "./widgets/DayCount/DayCount";
import DayWiseDestination from "./widgets/DayWiseDestination/DayWiseDestination";
import IconWithText from "./widgets/IconWithText/IconWithText";
import classes from "./TripSummaryDisplay.module.css";
import Divider from "./widgets/Divider/Divider";
import { FaCarOn } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import TripConfigurationDisplay from "./widgets/TipConfiguration/TripConfigurationDisplay";

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
        <Divider/>
        <div className={classes.tripInclusion}>
            <IconWithText icon={<FaCarOn />} text={"Transfer Included"} />
            <IconWithText icon={<MdHotel />} text={"Stay Included"} />
            <IconWithText icon={<MdFastfood />} text={"Meals Included"} />
            <IconWithText icon={<FaMountainSun />} text={"SightSeeing Included"} />
            <IconWithText icon={<GrUserWorker />} text={"Guide"} />
        </div>
        <Divider/>
        <TripConfigurationDisplay/>
    </div>
}

export default TripSummaryDisplay;