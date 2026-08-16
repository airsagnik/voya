import { useNavigate } from "react-router";
import classes from "./TabTile.module.css";

function TabTile({ title,path }: { title: string,path:string }) {
     const navigate = useNavigate()
    function navigateToPath()
    {
        navigate(path)

    }
    return <div className={classes.tabtile} onClick={()=>navigateToPath()}>
        <h3>{title}</h3>
    </div>
}

export default TabTile;