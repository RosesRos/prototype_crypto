import jss from "jss";
import { colors } from "../Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`;
};

jss.setup({createGenerateId});

const styles = {
    cardBtn: {
        width: "100%",
        border: "none",
        borderRadius: "2rem",
        backgroundColor: colors.bgButton
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

const cardBtn = () => {
    return `
        <button class=${classes.cardBtn}>click</button>
    `
}

export default cardBtn;