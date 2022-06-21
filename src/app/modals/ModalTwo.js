import jss from "jss";
import {colors} from "../Theme";
import { query } from "../MediaQuery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
};
jss.setup({createGenerateId});

const styles = {
    "@keyframes animatetop": {
        from: {
            top: "-30rem",
            opacity: 0,
        },
        to: {
            top: 0,
            opacity: 1,
        }
    },
    section: {
        overflow: "hidden",
    },
    modal_one: {
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 15,
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        transition: ["0.3s", "linear"],
        backdropFilter: ["blur(3px)", "!important"],
    },
    modal_one_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    modal_one_card: {
        maxWidth: "72rem",
        width: "100%",
        backgroundColor: colors.bgCard2,
        borderRadius: "2rem",
        padding: ["2rem", "3rem"],
        animationName: "$animatetop",
        animationDuration: "0.4s",

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
        margin: [0, "2rem"],
        borderRight: [1, "solid", "white"],
        borderLeft: [1, "solid", "white",]
    },
    modal_one_card_block: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        padding: "1rem",
        border: [1, "solid", "rgba(92, 114, 149, 0.2)"],
        borderRadius: "1.5rem",
    },
    modal_one_card_block_btn: {
        textAlign: "left",
        backgroundColor: "transparent",
        border: "none",
        color: colors.white,
        fontSize: "2rem",
        padding: 0,
    },
    modal_one_card_block_btn_span: {
        marginLeft: "-0.5rem"
    },
    modal_one_card_block_span: {
        fontSize: "1.6rem",
        backgroundColor: "rgba(75,96,126,.1)",
        borderRadius: "1.5rem",
        margin: ["0.5rem", 0],
        padding: "0.5rem",
    },
    modal_one_card_btns: {
        backgroundColor: "transparent",
        border: "none",
        width: "5rem",
        height: "5rem",
        color: colors.white
    },
    [`@media (max-width: ${query.mobile}px)`]: {
        modal_one: {
            padding: [0, "1rem"]
        }
    },
    [`@media (max-width: ${query.mobileSm}px)`]: {
        modal_one_card: {
            padding: ["1rem", "1rem"],
        },
        modal_one_card_content: {
            margin: "0.2rem",
        }
    },
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
                            <button class=${classes.modal_one_card_btns}>
                                <i class="fa-brands fa-ethereum"></i>
                            </button>
                            <div class=${classes.modal_one_card_content}>
                                <i class="fa-solid fa-angle-right"></i>
                                <div class=${classes.modal_one_card_block}>
                                    <button class=${classes.modal_one_card_block_btn}>
                                        <i class="fa-solid fa-euro-sign"></i>
                                        <span class=${classes.modal_one_card_block_btn_span}>BTC</span>
                                    </button>
                                    <p class=${classes.modal_one_card_block_span}>Uniswap V2 100%</p>
                                </div>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                            <button class=${classes.modal_one_card_btns}>
                                <i class="fa-solid fa-euro-sign"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

$(function() {
    var ethe4 = $(".fa-ethereum:eq(3)");
    ethe4.css({
        backgroundColor: `${colors.bgEthe3}`,
        borderRadius: "50%",
        padding: "0.5rem",
        paddingTop: "0.4rem",
        fontSize: "1.6rem",
        width: "2.4rem",
        height: "2.4rem",
        marginRight: "0.5rem",
    });

    var closeModal = $(".modal_one_btn_close");
    closeModal.on("click", function() {
        $(".modal_one").css("display", "none");
    });

    $(".modal_one_container").on("click", function() {
        $(".modal_one").css("display", "none");
    });
});

export default ModalTwo;