import jss from "jss";
import {image} from "./Data";

const createGenerateId = () => {
    // let counter = 0;
    
    return (rule) => `${rule.key}` ;
}

jss.setup({createGenerateId});

const styles = {
    img: {
        display: "none",
        width: "80%",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Img = () => {
    return `
        <img class=${classes.img} src="${image}"/>
    `
}

export default Img;