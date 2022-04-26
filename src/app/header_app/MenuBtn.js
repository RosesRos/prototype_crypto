import jss from "jss";
import { colors } from "../Theme";

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
            background: `linear-gradient(to right, ${colors.bgEthe} 0%, ${colors.bgEthe2} 100%)`,
        },
    },
    nav_btn_item: {
        padding: "1rem",
        margin: [0 , "auto"],
        outline: "none", 
        backgroundColor: "transparent",
        border: "none",
        color: colors.bgText,
        width: "100%",
    } 
}

const {classes} = jss.createStyleSheet(styles).attach();

const MenuBtn = () => {
    return `
        <nav class=${classes.nav_btn}>
            <div class=${classes.nav_btn_list}>
                <div class=${classes.nav_btn_content}>
                    <button class=${classes.nav_btn_item}>
                        <i class="fa-brands fa-ethereum"></i>
                        Ethereum
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
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

export default MenuBtn;