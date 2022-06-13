import jss from "jss";
import { colors } from "../Theme";
import { Ethe } from "./DataMenu";
import { query } from "../MediaQuery";
import * as $ from "jquery";


const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    nav_btn: {
        overflow: "hidden",
    },
    nav_btn_list: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        margin: [0, "auto"],
        paddingLeft: "1rem",
    },
    nav_btn_content: {
        zIndex: 5,
        "&:nth-child(1)": {
            marginRight: "1rem",
        },
        "&:nth-child(2)": {
            borderRadius: "1rem",
            backgroundColor: colors.bgCard2,
            "&:hover": {
                backgroundColor: colors.bgCard,
            }
        }
    },
    nav_btn_item: {
        padding: "1rem",
        margin: [0 , "auto"],
        outline: "none", 
        backgroundColor: "transparent",
        border: "none",
        color: colors.bgText,
        width: "100%",
        cursor: "pointer",
    },
    nav_btn_item_first: {
        padding: "1rem",
        margin: [0 , "auto"],
        outline: "none", 
        border: "none",
        color: colors.bgText,
        width: "100%",
        cursor: "pointer",
        background: `linear-gradient(to right, ${colors.bgEthe} 0%, ${colors.bgEthe2} 100%)`,
        borderRadius: "1rem",
        fontWeight: 500,
        "&:hover": {
            background: `linear-gradient(to right, ${colors.bgEthe2} 0%, ${colors.bgEthe} 100%)`
        }
    },
    nav_list_sub_btn: {
        paddingLeft: 0,
        marginTop: "0.5rem",
        borderRadius: "1rem",
        backgroundColor: colors.bgCard2,
        display: "none",
        overflow: "auto",
    },
    nav_item_sub_btn: {
        listStyle: "none",
        margin: [0, "auto"],
        padding: "1rem",
        "&:hover": {
            backgroundColor: colors.bgCard,
            color: colors.white,
            cursor: "pointer",
            borderRadius: "1rem",
        }
    },
    nav_items_sub_icon: {
        borderRadius: "50%",
        padding: "0.5rem",
        fontSize: "1rem",
        width: "2.4rem",
        height: "2.4rem",
        marginRight: "1rem",
        color: colors.white
    },
    arrow: {
        transform: "rotateX(150deg)",
    },
    [`@media (max-width: ${query.desktop}px)`]: {
        nav_btn_list: {
            paddingRight: "5rem",
        }
    },
    [`@media (max-width: ${query.mobile}px)`]: {
        nav_btn_list: {
            paddingRight: 0,
            paddingLeft: 0,
        }
    },
    [`@media (max-width: ${query.mobileSm}px)`]: {
        nav_btn_content: {
            "&:nth-child(1)": {
                display: "none",
            },
        },
    },
}

const {classes} = jss.createStyleSheet(styles).attach();

const MenuBtn = () => {
    return `
        <nav class=${classes.nav_btn}>
            <div class=${classes.nav_btn_list}>
                <div class=${classes.nav_btn_content}>
                    <button class=${classes.nav_btn_item_first}>
                        <i class="fa-brands fa-ethereum"></i>
                        Ethereum
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub_btn}>
                        ${Ethe.map((d) => `<li class=${classes.nav_item_sub_btn} key=${d.id}><span class=${classes.nav_items_sub_icon}>${d.img}</span>${d.ethe}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_btn_content}>
                    <button class=${classes.nav_btn_item}>
                        <i class="fa-solid fa-wallet"></i>
                        Connet Wallet
                    </button>
                </div>
                <div class=${classes.nav_btn_content}>
                    <button class=${classes.nav_btn_item}><i class="fa-solid fa-gear"></i></button>
                </div>
            </div>
        </nav>
    `
}

$(function() {
    var btnFirst = $(".nav_btn_item_first");
    var btnSecond = $(".nav_btn_item:eq(0)")
    
    btnFirst.css("color", `${colors.white}`);
    btnFirst.on("click", function() {
        var items = $(".nav_list_sub_btn");
        items.toggle();
        $(".fa-angle-down:eq(5)").toggleClass(`${classes.arrow}`);
    })
    btnSecond.css("color", `${colors.bgConnet}`);

    var ethe1 = $(".nav_items_sub_icon:eq(0)");
    var ethe2 = $(".nav_items_sub_icon:eq(1)");
    var ethe3 = $(".nav_items_sub_icon:eq(2)");
    var ethe4 = $(".nav_items_sub_icon:eq(3)");
    var ethe5 = $(".nav_items_sub_icon:eq(4)");
    var ethe6 = $(".nav_items_sub_icon:eq(5)");

    ethe1.css("background-color", `${colors.bgEthe3}`);
    ethe2.css("background-color", `${colors.bgPrice}`);
    ethe3.css("background-color", `${colors.bgPercent2}`);
    ethe4.css("background-color", `#C61313`);
    ethe5.css("background-color", `${colors.bgEthe}`);
    ethe6.css("background-color", `${colors.bgPrimary}`);

});

export default MenuBtn;