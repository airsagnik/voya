import TripListingCard from "../TripListingCard/TripListingCard";
import classes from "./CarousalGroupWithHeader.module.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useRef } from "react";

function CarousalGroupWithHeader() {

    const ref = useRef<HTMLDivElement>(null)
    function scrollRight()
    {
        const container = ref.current;
        if(!container)
        {
            return;
        }

        container.scrollBy({
            left : 374,
            behavior : "smooth",
        });

    }
    function scrollLeft()
    {
         const container = ref.current;
        if(!container)
        {
            return;
        }

        container.scrollBy({
            left : -374,
            behavior : "smooth",
        });

    }

    return <div className={classes.carousalHeaderContainer}>
        <div className={classes.header}>
            <h2>Europe</h2>
            <div>
                View All
            </div>
        </div>
        <div className={classes.carousel}>
            <div className={classes.buttons} onClick={scrollLeft} style={{
                transform : "translateX(50%)"
            }}>
                <FaChevronLeft />
            </div>
            <div className={classes.carousalItems} ref={ref}>
                <TripListingCard />
                <TripListingCard />
                <TripListingCard />
                <TripListingCard />
                <TripListingCard />
                <TripListingCard />
                <TripListingCard />
                <TripListingCard />
                <TripListingCard />
            </div>
            <div className={classes.buttons} onClick={scrollRight} style={{
                transform : "translateX(-50%)"
            }}>
                <FaChevronRight />
            </div>
        </div>
    </div>
}

export default CarousalGroupWithHeader;