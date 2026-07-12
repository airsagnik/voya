import { useState } from "react";
import classes from "./FlippableImage.module.css";

function FlippableImage({ width, height, url }: { width: number, height: number, url: string }) {
    const [angle, setAngle] = useState(0);
    return <div onMouseEnter={() => setAngle(prev => prev + 180)}>
        <img className={classes.flippableImage}
            style={{
                transform: `rotateY(${angle}deg)`
            }}
            src={url} alt="This is image"
            width={width}
            height={height} />
    </div>

}

export default FlippableImage;