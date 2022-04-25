import jss from "jss";
import * as theme from "./Theme";
import { imgSvg } from "./Data";


const styles = {
    text: {
        color: theme.bgButton,
        fontSize: "2rem",
    },
    icon: {
        width: "24px",
        height: "24px",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Text = () => {
    return `
        <h1 class=${classes.text}>
            i know that i will be a good programmer
            <img class=${classes.icon} src="${imgSvg}"/>
            <a href="#"> <i class="fab fa-facebook"></i></a>
            <a href="#"> <i class="fab fa-twitter"></i></a>
        </h1>
    `
}

export default Text;