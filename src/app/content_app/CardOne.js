import jss from "jss";
import { colors } from "../Theme";
import { query } from "../MediaQuery";
import * as $ from "jquery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
};

jss.setup({createGenerateId});

const styles = {
    card_body_first: {
        backgroundColor: colors.bgCard,
        padding: "1.5rem",
        width: "100%",
        borderRadius: "2rem",
        marginTop: "1rem",
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
        transition: ["0.2s", "ease"],
        "&:hover": {
            backgroundColor: colors.bgButton,
            borderRadius: "1rem",
            cursor: "pointer"
        }
    },
    card_body_first_input: {
        background: "transparent",
        border: "none",
        color: colors.white,
        textAlign: "end",
        outline: "none",
        minHeight: "2.4rem",
        fontSize: "2.4rem",
        padding: "0!important",
        width: "65%",
        "-webkit-appearance": "textfield",
        "-moz-appearance": "textfield",
        appearance: "textfield",
        "&:focus": {
            outline: "none",
            border: "none",
        },
        "&::-webkit-outer-spin-button": {
            display: "none",
        },
        "&::-webkit-inner-spin-button": {
            display: "none",
        }
    },
    arrow: {
        transform: "rotate(180deg)",
    },
    [`@media (max-width: ${query.mobile}px)`]: {
        card_body_first_input: {
            width: "55%",
        }
    },
    [`@media (max-width: ${query.mobileSm}px)`]: {
        card_body_first_input: {
            width: "50%",
        }
    },
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
            <input class=${classes.card_body_first_input} type="number" id="lnum" name="lnum" placeholder="0"></input>
        </div>
        <div class=${classes.card_body_first_content}>
            <span class=${classes.card_body_first_text}>Ethereum</span>
            <span class=${classes.card_body_first_num}></span>
        </div>
    </div>
    `
}

$(function() {
    $(".fa-angle-down:eq(6)").css("color", `${colors.bgText}`);
    var ethe = $(".fa-ethereum:eq(2)");
    ethe.css({
        backgroundColor: `${colors.bgEthe3}`,
        borderRadius: "50%",
        padding: "0.5rem",
        paddingTop: "0.4rem",
        fontSize: "1.6rem",
        width: "2.4rem",
        height: "2.4rem",
        marginRight: "0.5rem",
    });

    var btn = $(".card_body_first_btn");
    btn.hover(
        function() {
            $(".fa-angle-down:eq(6)").toggleClass(`${classes.arrow}`);
        },
        function() {
            $(".fa-angle-down:eq(6)").removeClass(`${classes.arrow}`);
        }
    );
});

export default CardOne;