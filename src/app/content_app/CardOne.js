import jss from "jss";
import { colors } from "../Theme";
import * as $ from "jquery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
};

jss.setup({createGenerateId});

const styles = {
    card_body_first: {
        backgroundColor: colors.bgCard,
        padding: "1.5rem",
        // height: "20rem",
        width: "100%",
        borderRadius: "2rem",
        marginTop: "2rem",
        // display: "flex",
        // justifyContent: "space-between",
    },
    card_body_first_content: {
        display: "flex",
        justifyContent: "space-between",
        margin: ["1.5rem", 2],
        "&:nth-child(3)": {
            marginBottom: "auto",
        }
    },
    card_body_first_text: {
        fontSize: "1.4rem",
        "&:hover": {
            color: colors.white,
        }
    },
    card_body_first_num: {
        fontSize: "1.4rem",
    },
    card_body_first_btn: {
        padding: ["0.5rem", "1rem"],
        marginLeft: "-1rem",
        fontSize: '2rem',
        backgroundColor: "transparent",
        border: "none",
        color: colors.white,
        fontWeight: "500",
        "&:hover": {
            backgroundColor: colors.bgButton,
            borderRadius: "1rem",
            cursor: "pointer"
        }
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const CardOne = () => {
    return  `
    <div class=${classes.card_body_first}>
        <div>
            <span class=${classes.card_body_first_text}>You sell</span>
        </div>
        <div class=${classes.card_body_first_content}>
            <button class=${classes.card_body_first_btn}>
                <i class="fa-brands fa-ethereum"></i>
                ETH
                <i class="fa-solid fa-angle-down"></i> </button>
            <input></input>
        </div>
        <div class=${classes.card_body_first_content}>
            <span class=${classes.card_body_first_text}>Ethereum</span>
            <span class=${classes.card_body_first_num}>75895858</span>
        </div>
    </div>
    `
}

$(function() {
    $(".fa-angle-down").css("color", `${colors.bgText}`);
    var ethe = $(".fa-ethereum");
    ethe.css({
        "background-color": `${colors.bgEthe3}`,
        "border-radius": "50%",
        "padding": "0.5rem",
        "padding-top": "0.4rem",
        "font-size": "1.6rem",
        "width": "2.4rem",
        "height": "2.4rem",
        "margin-right": "0.5rem",
    });
});

export default CardOne;