import Cta from '../Cta/Cta';
import classes from './AppBar.module.css';

function AppBar()
{
    return <div className={classes.appBarContainer}>
        <div className={classes.logo}>
            <h2>Voya</h2>
        </div>
        <div className={classes.appBarActions}>
            <Cta title={'India Packages'} path={'/tour'}/>
            <Cta title={'International packages'} path={'/'}/>
            <Cta title={'Activities'} path={'/'}/>
            <h4>Search</h4>
            <h4>Currency</h4>
            <h4>Login</h4>
        </div>

    </div>
}

export default AppBar;