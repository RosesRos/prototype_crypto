import jss from "jss";
import * as theme from "./Theme";
import Button from "./Button";
import Text from "./Text";
import Button2 from "./Button2";
import Img from "./Img";

const styles = {
    backgroundColor: theme.bgDiv,
    width: "50%",
    margin: theme.margin,
    padding: "0 1rem",
}

// const {classes} = jss.createRule(styles).applyTo();
// const {div} = jss.createRule(styles).applyTo();
const root = document.getElementById("root");
    // root.className = classes.root;
    // const {classes} = jss.createRule(styles).applyTo(root);

    jss.createRule(styles).applyTo(root);
    

const Main = () => {
    root.innerHTML = `
        ${Text()}
        ${Button()}
        ${Button2()}
        ${Img()}
    `

    // return root;
}

export default Main;