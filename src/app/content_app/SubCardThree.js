import jss from "jss";
import { colors } from "../Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
};

jss.setup({createGenerateId});

const styles = {
    sub_card_body_three: {
        // display: "none",
        backgroundColor: "transparent",
        padding: "1.5rem",
        width: "100%",
        // height: 0,
        // border: [1, "solid", `${colors.bgText}`],
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
                // cursor: "pointer",
            }
        },
        "&:nth-child(2)": {
            fontSize: "1.4rem",
            marginBottom: 0,
        }
    },
    sub_card_body_three_text: {
        // fontSize: "1.2rem",
        fontWeight: "500",
    },
}

const { classes } = jss.createStyleSheet(styles).attach();

const SubCardThree = () => {
    return `
        <div class=${classes.sub_card_body_three}>
            <div class=${classes.sub_card_body_three_content}>
                <span class=${classes.sub_card_body_three_text}>OTC</span>
                <span class=${classes.sub_card_body_three_text}>958589484984</span>
            </div>
            <div class=${classes.sub_card_body_three_content}>
                <span class=${classes.sub_card_body_three_text}>Tx cost</span>
                <span class=${classes.sub_card_body_three_text}>86959599595</span>
            </div>
        </div>
    `
}

$(function() {
    var span3 = $(".sub_card_body_three_text:eq(1)");
    span3.css("font-size", "2.5rem");
});


export default SubCardThree;