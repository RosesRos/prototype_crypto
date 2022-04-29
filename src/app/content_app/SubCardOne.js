import jss from "jss";
import { colors } from "../Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
}

jss.setup({createGenerateId});


const styles = {
    sub_card_body_one: {
        backgroundColor: "transparent",
        padding: "1.5rem",
        width: "100%",
        border: [1, "solid", `${colors.bgText}`],
        borderRadius: "2rem",
        marginTop: "2.5rem",
        position: "relative",
        "&:hover": {
            cursor: "pointer",
        },
        "&:after": {
            content: "'primary'",
            position: "absolute",
            width: "7rem",
            height: "2rem",
            // padding: "1rem",
            backgroundColor: colors.bgPrimary,
            top: "-1rem",
            left: 0,
            color: colors.white,
            textAlign: "center",
        }
    },
    sub_card_body_one_content: {
        display: "flex",
        justifyContent: "space-between",
        margin: 2,
        "&:nth-child(1)": {
            color: colors.white
        },
        "&:nth-child(2)": {
            fontSize: "1.4rem",
            marginBottom: 0,
        }
    },
    sub_card_body_one_text: {
        // fontSize: "1.2rem",
        fontWeight: "500",
    },
    active: {
        border: [1, "solid", `${colors.bgConnet}`],
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

const SubCardOne = () => {
    return `
        <div class="${classes.sub_card_body_one} ${classes.active}">
            <div class=${classes.sub_card_body_one_content}>
                <span class=${classes.sub_card_body_one_text}>1 Linch</span>
                <span class=${classes.sub_card_body_one_text}>488585.36377364</span>
            </div>
            <div class=${classes.sub_card_body_one_content}>
                <span class=${classes.sub_card_body_one_text}>1 Linch</span>
                <span class=${classes.sub_card_body_one_text}>488585.36377364</span>
            </div>
        </div>
    `
}

$(function() {
    var span2 = $(".sub_card_body_one_text:eq(1)");
    span2.css("font-size", "2.5rem");
})


export default SubCardOne;