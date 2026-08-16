import Cta from '../Cta/Cta';
import SearchIcon from '../SearchIcon/SearchIcon';
import classes from './AppBar.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationDrawer from './NavigationDrawer';
import { useState } from 'react';


function AppBar()
{
    const [isDrawerOpen,toggleDrawerOpenState] = useState(false);

    function closeDrawer()
    {
        toggleDrawerOpenState(false);
    }

    return <div className={classes.appBarContainer}>
        <div className={classes.logo}>
            <RxHamburgerMenu className={classes.hamburgerlogo} onClick={()=>toggleDrawerOpenState(!isDrawerOpen)} />
            <NavigationDrawer isOpen={isDrawerOpen} onClose={closeDrawer}/>
            <br />
            <h2>Voya</h2>
        </div>
        <div className={classes.appBarActions}>
            <Cta title={'India Packages'} path={'/tour'} isHiddenInMobileView={true}/>
            <Cta title={'International packages'} path={'/'} isHiddenInMobileView={true}/>
            <Cta title={'Activities'} path={'/'} isHiddenInMobileView={true}/>
            <SearchIcon/>
            <h4>Currency</h4>
            <Cta title={'Login'} path={'/login'} isHiddenInMobileView={false}/>
        </div>

    </div>
}

export default AppBar;