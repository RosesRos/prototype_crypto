import jss from "jss";
import Logo from "./header_app/Logo";
import Menu from "./header_app/Menu";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    header: {
        margin: "0 auto",
    },
    header_inner: {
        display: "inline-flex",
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
            </div>
        </header>
    `
}

export default Header;