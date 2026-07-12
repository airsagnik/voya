import classes from "./Carousel.module.css"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import IconTextSelector from "./IconTextSelector";
import { useRef, useState, useEffect } from "react";


function Carousel() {

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const updateButtons = () => {
        const container = containerRef.current;
        if (!container) return;

        setShowLeft(container.scrollLeft > 0);

        setShowRight(
            container.scrollLeft + container.clientWidth < container.scrollWidth
        );
    };

    useEffect(() => {
        updateButtons();
    }, []);

    const scrollRight = () => {
        const container = containerRef.current;
        if (!container) return;

        container.scrollBy({
            left: container.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollLeft = () => {
        const container = containerRef.current;
        if (!container) return;

        container.scrollBy({
            left: -container.clientWidth,
            behavior: "smooth",
        });
    };

    const containerRef = useRef<HTMLDivElement>(null);

    return <div className={classes.carouselHolder}>
        <div className={classes.scrollButton} onClick={scrollLeft}>{showLeft && <FaChevronLeft />}</div>
        <div className={classes.itemHolder} onScroll={updateButtons} ref={containerRef}>{Array.from({ length: 30 }).map((_, index) => (
            <IconTextSelector
                key={index}
                isTrending={true}
                title="Japan"
            />
        ))}</div>
        <div className={classes.scrollButton} onClick={scrollRight}>{showRight && <FaChevronRight />}</div>
    </div>
}

export default Carousel;