import jss from "jss";
import { colors } from "../Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
};

jss.setup({createGenerateId});

const styles = {
    cardBtn: {
        width: "100%",
        borderRadius: "1rem",
        backgroundColor: colors.bgButton,
        marginTop: "1.5rem",
        "&:hover": {
            backgroundColor: `${colors.bgEthe2}`,
        }
    },
    cardBtn_item: {
        padding: "1rem",
        margin: [0 , "auto"],
        outline: "none", 
        backgroundColor: "transparent",
        border: "none",
        color: colors.bgText,
        width: "100%",
        cursor: "pointer",
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

const cardBtn = () => {
    return `
        <div class=${classes.cardBtn}>
            <button class=${classes.cardBtn_item}>
                <i class="fa-solid fa-wallet"></i>
                Connet Wallet
            </button>
        </div>
    `
}

$(function() {
    var cardBtn = $(".cardBtn_item");
    cardBtn.css("color", `${colors.bgConnet}`);
    
    cardBtn.on("click", function() {
        $(".modal_one").css("display", "block");
    });
});

export default cardBtn;