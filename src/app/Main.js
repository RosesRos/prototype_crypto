import jss from "jss";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ModalTwo from "./modals/ModalTwo";


const root = document.getElementById("root");


const styles = {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    paddingTop: "1rem",
    margin: [0, "auto"],
    maxWidth: "140rem",
    overflow: "hidden",
}

jss.createRule(styles).applyTo(root);


const Main = () => {
    root.innerHTML = `
        ${Header()}
        ${Content()}
        ${ModalTwo()}
        ${Footer()}
    `
};

export default Main;