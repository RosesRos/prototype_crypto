import jss from "jss";
import { colors } from "../Theme";
import { query } from "../MediaQuery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
};

jss.setup({createGenerateId});

const styles = {
    sub_card_body_two: {
        backgroundColor: "transparent",
        padding: "1.5rem",
        width: "100%",
        border: [0.2, "solid", "rgba(92, 114, 149, 0.5)"],
        borderRadius: "2rem",
        marginTop: "0.8rem",
        position: "relative",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(6, 7, 10, 0.5)"
        }
    },
    sub_card_body_two_content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 2,
        "&:nth-child(1)": {
            "&:hover": { 
                color: colors.white,
            }
        },
        "&:nth-child(2)": {
            fontSize: "1.4rem",
            marginBottom: 0,
        }
    },
    sub_card_body_btn: {
        padding: ["0.5rem", "1rem"],
        backgroundColor: colors.bgCard,
        borderRadius: "2rem",
        border: "none",
        fontSize: "1.4rem",
        fontWeight: "600",
        marginLeft: "-1rem",
        "&:hover": {
            backgroundColor: colors.bgCard,
            color: colors.white,
        }
    },
    sub_card_body_two_text: {
        fontWeight: "500",
    },
    [`@media (max-width: ${query.mobile}px)`]: {
        sub_card_body_two: {
            width: "30rem"
        }
    },
    [`@media (max-width: ${query.mobileSm}px)`]: {
        sub_card_body_two: {
            width: "23rem"
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

const SubCardTwo = () => {
    return `
        <div class=${classes.sub_card_body_two}>
            <div class=${classes.sub_card_body_two_content}>
                <span class=${classes.sub_card_body_btn}>Uniswap <i class="fa-solid fa-angle-down"></i></span>
                <span class=${classes.sub_card_body_two_text} id="uni"></span>
            </div>
            <div class=${classes.sub_card_body_two_content}>
                <span class=${classes.sub_card_body_two_text}>Tx cost</span>
                <span class=${classes.sub_card_body_two_text} id="uniTotal"></span>
            </div>
        </div>
    `
}


$(function() {
    var span2 = $(".sub_card_body_two_text:eq(0)");
    span2.css("font-size", "2rem");

    var uniswap = $(".sub_card_body_btn");
    uniswap.on("click", function() {
        $(".card_body_three_content").toggleClass("active1");
    })

});

export default SubCardTwo;