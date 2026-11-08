import classes from "./IconWithText.module.css";

function IconWithText({ icon, text }: { icon: React.ReactNode, text: string }) {
    return <div className={classes.imageTextDesign}>
        <div>
            {icon}
        </div>
        <div>
            {text}
        </div>
    </div>
}

export default IconWithText;