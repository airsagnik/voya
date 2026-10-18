import classes from "./ImafeDisplayWidget.module.css";

function ImageDisplayWidget({ imageUrl, text }: { imageUrl: string, text: string | null}) {
    return <div className={classes.imageTextHolder}>
        <img className={classes.image} src={imageUrl} alt="destinationImage" />
        {text && <p className={classes.overlayText}>{text}</p>}
    </div>
}

export default ImageDisplayWidget;