import { Link } from "react-router";
import classes from './Cta.module.css';

function Cta({ title, path, isHiddenInMobileView }: { title: string, path: string, isHiddenInMobileView:boolean }) {
    return <div className={isHiddenInMobileView? classes.hideOnMobileView : ""}>
        <Link className={classes.linkWithoutUnderline} to={path}><h3>{title}</h3></Link>
    </div>
}

export default Cta;