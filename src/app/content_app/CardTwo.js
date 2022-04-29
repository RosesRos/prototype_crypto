import jss from "jss";
import { colors } from "../Theme";
import SubCardOne from "./SubCardOne";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    card_body_second: {
        border: [0.2, "solid", `${colors.bgText}`],
        backgroundColor: "transparent",
        width: "100%",
        padding: "1.5rem",
        borderRadius: "2rem",
        // height: "30rem",
    },
    card_body_second_content: {
        margin: ["1.5rem", 2],
    },
    card_body_second_text: {
        fontSize: "1.4rem",
        "&:hover": {
            color: colors.white,
        }
    },
    card_body_second_btn: {
        padding: ["0.5rem", "1rem"],
        marginLeft: "-1rem",
        fontSize: '2rem',
        backgroundColor: "transparent",
        border: "none",
        color: colors.white,
        fontWeight: "500",
        "&:hover": {
            backgroundColor: colors.bgCard,
            borderRadius: "1rem",
            cursor: "pointer"
        }
    },
    arrow: {
        transform: "rotateX(150deg)",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const CardTwo = () => {
    return `
        <div class=${classes.card_body_second}>
            <div>
                <span class=${classes.card_body_second_text}>You buy</span>
            </div>
            <div class=${classes.card_body_second_content}>
                <button class=${classes.card_body_second_btn}>
                    <i class="fa-solid fa-euro-sign"></i>
                    DAI
                    <i class="fa-solid fa-angle-down"></i></button>
            </div>
            ${SubCardOne()}
        </div>
    `
}


$(function() {
    var euro = $(".fa-euro-sign");
    euro.css({
        backgroundColor: `${colors.bgPrice}`,
        borderRadius: "50%",
        padding: "0.5rem",
        paddingTop: "0.4rem",
        paddingLeft: "0.2rem",
        fontSize: "1.6rem",
        width: "2.4rem",
        height: "2.4rem",
        marginRight: "0.5rem",
    });

    var btn = $(".card_body_second_btn");
    btn.hover(
        function() {
            $(".fa-angle-down:eq(7)").toggleClass(`${classes.arrow}`);
        },
        function() {
            $(".fa-angle-down:eq(7)").removeClass(`${classes.arrow}`);
        }
    );
});


export default CardTwo;