import classes from "./RatingWidget.module.css";
function RatingWidget({rating,agency,linkToLogoImage}:{rating:number,agency:string,linkToLogoImage:string}) {

    return <div className={classes.individualRating}>
        <div>
            <img src={`${linkToLogoImage}`} alt="" />
        </div>
        <div>
            <div>{rating}/5</div>
            <div>{agency}</div>
        </div>
    </div>

}

export default RatingWidget;