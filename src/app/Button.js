import jss from "jss";
import * as theme from "./Theme";
import * as $ from "jquery";


const styles = {
    button: {
        color: theme.colorBtn,
        border: theme.border,
        backgroundColor: theme.bgButton,
        "&:hover": {
            color: theme.yellow,
            cursor: "pointer",
        }
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Button = () => {
    return `
        <button class=${classes.button} id="demo">show the image</button>
    `
}

$(function() {
    $("#demo").on("click", function() {
        var img = $(".img");
        img.toggle();
    })
})



export default Button;