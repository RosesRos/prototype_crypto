import jss from "jss";
import Header from "./Header";


const root = document.getElementById("root");

const styles = {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "1rem",
}

jss.createRule(styles).applyTo(root);


const Main = () => {
   root.innerHTML = `
        ${Header()}
   `
};

export default Main;