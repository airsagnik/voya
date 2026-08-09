import classes from "../AppBar/NavigationDrawer.module.css";
import { RxCross1 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";

import Cta from "../Cta/Cta";
import type { ReactNode } from "react";

function NavigationDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return <div className={isOpen ? classes.drawerOpen : classes.drawer}>
        <div className={classes.close}>
            <RxCross1 onClick={() => onClose()} />
        </div>
        <NavigationItems child={<Cta title={'India Packages'} path={'/tour'} isHiddenInMobileView={false} />} />
        <NavigationItems child={<Cta title={'International packages'} path={'/'} isHiddenInMobileView={false} />} />
        <NavigationItems child={<Cta title={'Activities'} path={'/'} isHiddenInMobileView={false} />} />

    </div>
}

export default NavigationDrawer;

function NavigationItems({ child }: { child: ReactNode }) {
    return <div className={classes.navigationItems}>
        {child}
        <FaChevronRight />
    </div>
}