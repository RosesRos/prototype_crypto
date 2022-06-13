import jss from "jss";
import MenuBtn from "./header_app/MenuBtn";
import { colors } from "./Theme";
import { query } from "./MediaQuery";
import * as $ from "jquery";


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


$(function() {
    var btnSecond = $(".nav_btn_item:eq(2)")
    btnSecond.css("color", `${colors.bgConnet}`);


    var ethe7 = $(".nav_items_sub_icon:eq(6)");
    var ethe8 = $(".nav_items_sub_icon:eq(7)");
    var ethe9 = $(".nav_items_sub_icon:eq(8)");
    var ethe10 = $(".nav_items_sub_icon:eq(9)");
    var ethe11 = $(".nav_items_sub_icon:eq(10)");
    var ethe12 = $(".nav_items_sub_icon:eq(11)");

    ethe7.css("background-color", `${colors.bgEthe3}`);
    ethe8.css("background-color", `${colors.bgPrice}`);
    ethe9.css("background-color", `${colors.bgPercent2}`);
    ethe10.css("background-color", `#C61313`);
    ethe11.css("background-color", `${colors.bgEthe}`);
    ethe12.css("background-color", `${colors.bgPrimary}`);
})

export default Footer;