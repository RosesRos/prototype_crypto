import jss from "jss";
import { colors } from "./Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
};

jss.setup({createGenerateId});

const styles = {
    section: {
        overflow: "hidden",
        // display: "flex",
        // justifyContent: "center",
    },
    card: {
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, 10%)",
        backgroundColor: colors.bgCard2,
        maxWidth: "45rem",
        width: "100%",
        height: "30rem",
        borderRadius: "2rem",
        padding: ["1rem", "0.5rem"],
        zIndex: 0,
        // marginTop: "10%",
    },
    card_header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        margin: [0, "auto"],
    },
    card_header_btn:{
        backgroundColor: "transparent",
        border: "none",
        padding: "1rem",
        color: colors.bgText,
        "&:nth-child(1)": {
            color: colors.white,
            "&:hover": {
                color: colors.white,
            }
        },
        "&:hover": {
            color: colors.bgConnet,
            cursor: "pointer",
        }
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Content = () => {
    return `
        <section class=${classes.section}>
            <div class=${classes.card}>
                <div class=${classes.card_header}>
                    <div>
                        <button class=${classes.card_header_btn}>Swap</button>
                        <button class=${classes.card_header_btn}>Limit</button>
                        <button class=${classes.card_header_btn}>P2P</button>
                    </div>
                    <div>
                        <button class=${classes.card_header_btn}><i class="fa-solid fa-spinner"></i></button>
                        <button class=${classes.card_header_btn}><i class="fa-solid fa-bars-progress"></i></button>
                    </div>
                </div>
            </div>
        </section>
    `
}

export default Content;