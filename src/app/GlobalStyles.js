import jss from "jss";
import preset from 'jss-preset-default';

jss.setup(preset())

const styles = {
    "@global": {
        "*": {
            boxSizing: "border-box",
            "&::before": {
                boxSizing: "border-box",
            },
            "&::after": {
                boxSizing: "border-box"
            }
        },
        html: {
            fontSize: "10px",
        },
        body: {
            fontSize: "16px",
        },
    }
}

const sheet = jss.createStyleSheet(styles).attach();

export default sheet;
