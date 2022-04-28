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
        padding: ["1rem", "1.5rem"],
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
        fontWeight: 800,
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
    },
    card_header_icons: {
        backgroundColor: "transparent",
        border: "none",
        padding: "1rem",
        color: colors.bgText,
        "&:hover": {
            backgroundColor: colors.bgButton,
            borderRadius: "1rem",
            color: colors.white,
            cursor: "pointer",
        }
    },
    card_body_first: {
        backgroundColor: colors.bgCard,
        padding: "1.5rem",
        // height: "20rem",
        width: "100%",
        borderRadius: "2rem",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
    },
    card_body_first_content: {
        display: "inline-flex",
        flexDirection: "column",
        margin: [0, 2]
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
                        <button class=${classes.card_header_icons}><i class="fa-solid fa-spinner"></i></button>
                        <button class=${classes.card_header_icons}><i class="fa-solid fa-bars-progress"></i></button>
                    </div>
                </div>
                <div class=${classes.card_body_first}>
                   <div class=${classes.card_body_first_content}>
                        <span>You Sell</span>
                        <button>Eth <i class="fa-solid fa-angle-down"></i> </button>
                        <span>Etherum</span>
                   </div>
                   <div class=${classes.card_body_first_content}>
                        <input></input>
                        <span>75895858</span>
                   </div>
                </div>
            </div>
        </section>
    `
}

export default Content;