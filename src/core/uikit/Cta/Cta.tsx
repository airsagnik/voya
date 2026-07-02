import { Link } from "react-router";
import classes from './Cta.module.css';

function Cta({ title, path }: { title: string, path: string }) {
    return <div>
        <Link className={classes.linkWithoutUnderline} to={path}><h3>{title}</h3></Link>
    </div>
}

export default Cta;