import ImageDisplayWidget from "./ImageDisplayWidget";
import classes from "./ImageGrid.module.css";

function ImageGrid() {
    return <div className={classes.imageGridHolder}>
        <div className={classes.leftImageSection}>
            <ImageDisplayWidget imageUrl="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" text={null} />
        </div>
        <div className={classes.rightImageSection}>
            <ImageDisplayWidget imageUrl="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" text={"Destination"} />
            <ImageDisplayWidget imageUrl="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" text={"Stays"} />
            <ImageDisplayWidget imageUrl="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" text={"Activities and Sightseeing"} />
            <ImageDisplayWidget imageUrl="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" text={null} />
        </div>
    </div>
}

export default ImageGrid;