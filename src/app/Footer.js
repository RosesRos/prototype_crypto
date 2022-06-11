import jss from "jss";
import MenuBtn from "./header_app/MenuBtn";
import { colors } from "./Theme";
import { query } from "./MediaQuery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
}

jss.setup({createGenerateId});

const styles = {
    footer: {
        margin: [0, "auto"],
        display: "none",
    },
    footer_inner: {
        padding: "2rem",
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 5,
        backgroundColor: colors.bgButton,
        borderRadius: ["4rem", "4rem", 0, 0],
    },
    [`@media (max-width: ${query.mobile}px)`]: {
        footer: {
            display: "block",
        }
    },
}

const { classes } = jss.createStyleSheet(styles).attach();

const Footer = () => {
    return `
        <footer class=${classes.footer}>
            <div class=${classes.footer_inner}>
                ${MenuBtn()}
            </div>
        </footer>
    `
}

export default Footer;