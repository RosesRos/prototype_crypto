import jss from "jss";
import { colors } from "../Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    nav: {
        overflow: "hidden",
    },
    nav_list: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nav_item: {
        padding: "1rem",
        listStyle: "none",
        margin: "0 auto",      
    },
    nav_link: {
        display: "inline-block",
        margin: "0 auto",
        color: colors.bgText,
        // FontSize: "2rem",
        textDecoration: "none",
        paddingRight: "1rem",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Menu = () => {
    return `
        <nav class=${classes.nav}>
            <ul class=${classes.nav_list}>
                <li class=${classes.nav_item}>
                    <a class=${classes.nav_link} href="#">Trade <i class="fa-solid fa-angle-down"></i> </a>
                </li>
                <li class=${classes.nav_item}>
                    <a class=${classes.nav_link} href="#">DAO <i class="fa-solid fa-angle-down"></i></a>
                </li>
                <li class=${classes.nav_item}>
                    <a class=${classes.nav_link} href="#">Ear <i class="fa-solid fa-angle-down"></i></a>
                </li>
                <li class=${classes.nav_item}>
                    <a class=${classes.nav_link} href="#">More <i class="fa-solid fa-angle-down"></i></a>
                </li>
                <li class=${classes.nav_item}>
                    <a class=${classes.nav_link} href="#">Bridges <i class="fa-solid fa-angle-down"></i></a>
                </li>
                <li class=${classes.nav_item}>
                    <a class=${classes.nav_link} href="#">Buy ETH </a>
                </li>
            </ul>
        </nav>
    `
}

export default Menu;