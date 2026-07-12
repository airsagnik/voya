import classes from './BannerCointainer.module.css';
import PhotoGridLayout from './PhotoGridLayout';
import CentralCard from './CentralCard';
import Carousel from './Carousel';

function BannerContainer()
{
    return <div>
        <div className={classes.bannerContainer}>
        <div className={classes.photogrid}>
             <PhotoGridLayout justifyContent='end' alignItems='end' isReverse={true}/>
            <PhotoGridLayout justifyContent='end'alignItems='start' isReverse={true}/>
        </div>
        <div className={classes.centralColumn}>
            <CentralCard/>
        </div>
        <div className={classes.photogrid}>
            <PhotoGridLayout justifyContent='start' alignItems='end' isReverse={false}/>
            <PhotoGridLayout justifyContent='start' alignItems='start' isReverse={false}/>
        </div>
    </div>
    <Carousel/>
    </div>
}

export default BannerContainer;