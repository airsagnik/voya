import classes from "./LoginOverlay.module.css";
import TabBar from "../LoginComponents/TabBar";


function LoginOverlay() {
    return <div className={classes.loginOverlay}>
        <div className={classes.leftColumnHolder}>
            <img className={classes.leftColumn} src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
        </div>
        <div className={classes.rightColumn}>
            <TabBar/>
        </div>
    </div>;
}

export default LoginOverlay;