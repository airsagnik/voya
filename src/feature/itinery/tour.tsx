import AppBar from "../../core/uikit/AppBar/AppBar";
import ImageGrid from "./widgets/ImageGrid/ImageGrid";
import ItineraryLayout from "./widgets/Itinerary/ItineraryLayout";

function TourPage() {
    return <div>
        <AppBar />
        <ImageGrid/>
        <ItineraryLayout/>
    </div>
}

export default TourPage;