import jss from "jss";
import { colors } from "./Theme";
import CardOne from "./content_app/CardOne";
import CardTwo from "./content_app/CardTwo";
import cardBtn from "./content_app/CardBtn";

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
    section_inner: {
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, 10%)",
    },
    card: {
        // position: "absolute",
        // top: "20%",
        // left: "50%",
        // transform: "translate(-50%, 10%)",
        backgroundColor: colors.bgCard2,
        maxWidth: "40rem",
        width: "100%",
        // height: "30rem",
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
    extra: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        paddingTop: "1.5rem",
    },
    extra_span: {
        fontSize: "1.4rem",

    },
    extra_btn: {
        backgroundColor: "transparent",
        color: colors.bgText,
        border: "none",
        padding: "0.5rem",
        fontSize: "1.4rem",
        "&:hover": {
            color: colors.white,
            cursor: "pointer",
        }
    }
    
}

const {classes} = jss.createStyleSheet(styles).attach();

const Content = () => {
    return `
        <section class=${classes.section}>
            <div class=${classes.section_inner}>
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
                    ${CardOne()}
                    <span><i class="fa-solid fa-arrow-down"></i></span>
                    ${CardTwo()}
                    ${cardBtn()}
                </div>
                <div class=${classes.extra}>
                    <span class=${classes.extra_span}>Route</span>
                    <button class=${classes.extra_btn}>
                        ETH 
                        <i class="fa-solid fa-angle-right"></i> 
                        DAI
                        <i class="fa-solid fa-arrow-trend-up"></i>
                    </button>
                </div>
            </div>
        </section>
    `
}


export default Content;