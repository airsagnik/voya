import Cta from '../Cta/Cta';
import SearchIcon from '../SearchIcon/SearchIcon';
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
            <SearchIcon/>
            <h4>Currency</h4>
            <Cta title={'Login'} path={'/'}/>
        </div>

    </div>
}

export default AppBar;