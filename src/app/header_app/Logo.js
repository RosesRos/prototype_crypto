import jss from "jss";
import { Data } from "../Data";

const createGenerateId = () => {
    return (rule) => `header_${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    logo: {
        width: "5rem",
        height: "5rem",
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

const Logo = () => {
    return `
        <img class=${classes.logo} src="${Data.image}" />
    `
}

export default Logo;