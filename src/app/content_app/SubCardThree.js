import jss from "jss";
import { colors } from "../Theme";
import { query } from "../MediaQuery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
};

jss.setup({createGenerateId});

const styles = {
    sub_card_body_three: {
        backgroundColor: "transparent",
        padding: "1.5rem",
        width: "100%",
        border: [0.2, "solid", "rgba(92, 114, 149, 0.5)"],
        borderRadius: "2rem",
        marginTop: "0.8rem",
        position: "relative",
        transition: ["2s", "ease-in-out"],
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgba(6, 7, 10, 0.5)"
        }
    },
    sub_card_body_three_content: {
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
    sub_card_body_three_text: {
        fontWeight: "500",
    },
    [`@media (max-width: ${query.mobile}px)`]: {
        sub_card_body_three: {
            width: "30rem"
        }
    },
    [`@media (max-width: ${query.mobileSm}px)`]: {
        sub_card_body_three: {
            width: "23rem"
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

const SubCardThree = () => {
    return `
        <div class=${classes.sub_card_body_three}>
            <div class=${classes.sub_card_body_three_content}>
                <span class=${classes.sub_card_body_three_text}>OTC</span>
                <span class=${classes.sub_card_body_three_text} id="ot"></span>
            </div>
            <div class=${classes.sub_card_body_three_content}>
                <span class=${classes.sub_card_body_three_text}>Tx cost</span>
                <span class=${classes.sub_card_body_three_text} id="otc">895495</span>
            </div>
        </div>
    `
}

$(function() {
    var span3 = $(".sub_card_body_three_text:eq(1)");
    span3.css("font-size", "2rem");
});


export default SubCardThree;