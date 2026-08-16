import AppBar from "../../core/uikit/AppBar/AppBar";
import BannerContainer from "../../core/uikit/Banner/BannerContainer";
import CarousalGroupWithHeader from "../../core/uikit/CarousalGroupWithHeader/CarousalGroupWithHeader";
import TripTrackerWidget from "../../core/uikit/TripTrackerWidget/TripTrackerWidget";



function Homepage() {
    return <div>
        <AppBar/>
        <BannerContainer/>
        <CarousalGroupWithHeader/>
        <TripTrackerWidget/>
    </div>
}

export default Homepage;