import jss from "jss";
import Logo from "./header_app/Logo";
import Menu from "./header_app/Menu";
import MenuBtn from "./header_app/MenuBtn";
import Burger from "./header_app/Burger";
import { query } from "./MediaQuery";



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
    },
    header_inner_child: {
        display: "block"
    },
    [`@media (max-width:${query.mobile}px)`]: {
        header_inner_child: {
            display: "none"
        },
    },
}

const {classes} = jss.createStyleSheet(styles).attach();


const Header = () => {
    return  `
        <header class=${classes.header}>
            <div class=${classes.header_inner}>
                ${Logo()}
                ${Menu()}
                <div class=${classes.header_inner_child}>${MenuBtn()}</div>
                ${Burger()}
            </div>
        </header>
    `
}

export default Header;