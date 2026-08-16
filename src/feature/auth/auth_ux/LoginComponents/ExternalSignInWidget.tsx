import { FcGoogle } from "react-icons/fc";
import classes from "./ExternalSignInWidget.module.css";

function ExternalSignInWidget()
{
    return  <div className={classes.externalSignInHolder}>
            <div>
                <FcGoogle />
            </div>
            <div>
                Sign In with Google
            </div>
        </div>
}

export default ExternalSignInWidget;