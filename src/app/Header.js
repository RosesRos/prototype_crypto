import jss from "jss";
import Logo from "./header_app/Logo";
import Menu from "./header_app/Menu";
import MenuBtn from "./header_app/MenuBtn";
import Burger from "./header_app/Burger";



const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    header: {
        margin: "0 auto",
    },
    header_inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: "1rem",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();


const Header = () => {
    return  `
        <header class=${classes.header}>
            <div class=${classes.header_inner}>
                ${Logo()}
                ${Menu()}
                ${MenuBtn()}
                ${Burger()}
            </div>
        </header>
    `
}

export default Header;