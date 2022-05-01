import jss from "jss";
import {colors} from "../Theme";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
};
jss.setup({createGenerateId});

const styles = {
    section: {
        overflow: "hidden",
    },
    modal_one: {
        position: "fixed",
        top: 0,
        left: 0,
        // transform: "translate(-50%, -50%)",
        // maxWidth: "30rem",
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        // padding: "1rem",
        zIndex: 10,
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        transition: ["0.3s", "linear"],
        backdropFilter: ["blur(3px)", "!important"],
    },
    modal_one_container: {
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // maxWidth: "50rem",
        // width: "100%",
        // height: "30rem",
        // backgroundColor: colors.bgCard2,
        // borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    modal_one_card: {
        // justifyContent: "center",
        // alignItems: "center",
        maxWidth: "72rem",
        width: "100%",
        // height: "30rem",
        backgroundColor: colors.bgCard2,
        borderRadius: "2rem",
        padding: ["2rem", "3rem"],

    },
    modal_one_card_item: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        margin: ["1rem", 0],
        "&>h2": {
            margin: ["1rem", 0],
            color: colors.white,
            fontWeight: 300,
        }
    },
    modal_one_btn_close: {
        backgroundColor: "transparent",
        border: "none",
        color: colors.bgText,
        position: "absolute",
        fontWeight: 700,
        fontSize: "2rem",
        top: 0,
        right: 0,
        "&:hover": {
            cursor: "pointer",
            color: colors.white,
        }
    },
    modal_one_card_content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: [0, "2rem"],

    },
    modal_one_card_block: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        padding: "1rem",
        border: [1, "solid", "rgba(92, 114, 149, 0.2)"],
        borderRadius: "1.5rem",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const ModalTwo = () => {
    return`
        <section class=${classes.section}>
            <div class=${classes.modal_one}>
                <div class=${classes.modal_one_container}>
                    <div class=${classes.modal_one_card}>
                        <div class=${classes.modal_one_card_item}>
                            <h2>Routing</h2>
                            <button class=${classes.modal_one_btn_close}>X</button>
                        </div>
                        <div class=${classes.modal_one_card_item}>
                            <button>
                                <i class="fa-brands fa-ethereum"></i>
                            </button>
                            <div class=${classes.modal_one_card_content}>
                                <i class="fa-solid fa-angle-right"></i>
                                <div class=${classes.modal_one_card_block}>
                                    <button>
                                        <i class="fa-solid fa-euro-sign"></i>
                                        DAI
                                    </button>
                                    <span>Uniswap V2 100%</span>
                                </div>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                            <button>
                                <i class="fa-solid fa-euro-sign"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export default ModalTwo;