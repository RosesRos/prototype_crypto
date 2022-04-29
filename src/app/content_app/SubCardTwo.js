import jss from "jss";
import { colors } from "../Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
};

jss.setup({createGenerateId});

const styles = {
    sub_card_body_two: {
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
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

const SubCardTwo = () => {
    return `
        <div class=${classes.sub_card_body_two}>
            <div>
                <button>Uniswap</button>
                <span>9585959596</span>
            </div>
            <div>
                <span>Tx cost</span>
                <span>8494948484</span>
            </div>
        </div>
    `
}

export default SubCardTwo;