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
        maxWidth: "50rem",
        width: "100%",
        height: "30rem",
        backgroundColor: colors.bgCard2,
        borderRadius: "2rem",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const ModalTwo = () => {
    return`
        <section class=${classes.section}>
            <div class=${classes.modal_one}>
                <div class=${classes.modal_one_container}>
                    <div class=${classes.modal_one_card}></div>
                </div>
            </div>
        </section>
    `
}

export default ModalTwo;