import { Outlet} from "react-router";
import classes from './TabBar.module.css';
import TabTile from "./TabTile";

function TabBar()
{
    return <div>
        <div className={classes.tabRoutesHolder}>
         <TabTile title="Login" path="/login"/>
         <TabTile title="SignUp" path="/login/signup"/>
        </div>
        <div className={classes.routeContentHolder}>
           <Outlet/>
        </div>
        </div>;
}

export default TabBar;