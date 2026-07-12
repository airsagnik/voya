import { CiSearch } from "react-icons/ci";
import classes from "./SearchIcon.module.css";

function SearchIcon() {
    return <div className={classes.searchIcon}>
        <CiSearch />
    </div>
}

export default SearchIcon;