import { Link } from "react-router";
import classes from "./LoginForm.module.css";
import ExternalSignInWidget from "./ExternalSignInWidget";
import RatingDisplay from "../../../../core/uikit/Rating/RatingDisplay";




function LoginForm({isSignUp}: {isSignUp : boolean }) {
    return <div>
         <div className={classes.loginForm}>
        <div>
            {isSignUp?<h4>Log into your account</h4>:<h4>Create Your Account</h4>}
            <br />
        </div>
        <div className={classes.formHolder}>
            <form action="">
                {isSignUp && <input type="fullName" placeholder="Full Name" />}
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {isSignUp && <input type="confirmPassword" placeholder="Confirm Password" />}
                {!isSignUp && <div className={classes.forgotPassword}>
                    <Link to={"/"}>Forgot Password?</Link>
                </div>}
                {isSignUp && <p>By joining, you agree to the Terms and Privacy Policy.</p>}
                <button>{!isSignUp?"Login and Continue":"Sign Up"}</button>
            </form>
        </div>
        <br />
        {!isSignUp && <ExternalSignInWidget/>}
    </div>
      {!isSignUp && <RatingDisplay/>}
    </div>
}

export default LoginForm;