import jss from "jss";
import * as theme from "./Theme";


const createGenerateId = () => {
    let counter = 0;

    return (rule, classes) => `coco_${rule.key}_${counter++}`; 
}

jss.setup({createGenerateId});

const styles = {
    // "@global": {
    //     a: {
    //         textDecoration: 'none'
    //     }
    // },
    button1: {
        backgroundColor: theme.colorBtn,
        color: "green"
    },
    button2: {
        backgroundColor: "green",
        color: theme.colorBtn
    }
} 

const {classes} = jss.createStyleSheet(styles).attach();

let coco = "mi coco yambo";

const Button2 = () => {
    return `
        <button class=${classes.button1}>coco</button>
        <button class=${classes.button2}>coco</button>
        <a class=${classes.button1}><span>coco</span></a>
        <input placeholder="${coco}">
    `
}

export default Button2;