import jss from "jss";
import { colors } from "../Theme";
import { Ethe } from "./DataMenu";
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
        "&:nth-child(1)": {
            marginRight: "1rem",
        },
        "&:nth-child(2)": {
            // border: ["1px", "solid", "white"],
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
        // backgroundColor: "transparent",
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
        textAlign: "center",
        "&:hover": {
            backgroundColor: colors.bgCard,
            cursor: "pointer",
            borderRadius: "1rem",
        }
    } 
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
                        ${Ethe.map((d) => `<li class=${classes.nav_item_sub_btn} key=${d.id}>${d.ethe}</li>`).join(" ")}
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
    })
    btnSecond.css("color", `${colors.bgConnet}`)
});

export default MenuBtn;