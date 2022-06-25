import jss from "jss";
import { colors } from "./Theme";
import CardOne from "./content_app/CardOne";
import CardTwo from "./content_app/CardTwo";
import cardBtn from "./content_app/CardBtn";
import { query } from "./MediaQuery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
};

jss.setup({createGenerateId});

const styles = {
    section: {
        overflow: "hidden",
    },
    section_inner: {
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, 10%)",
    },
    card: {
        backgroundColor: colors.bgCard2,
        maxWidth: "40rem",
        width: "100%",
        borderRadius: "2rem",
        padding: ["1rem", "1.5rem"],
        zIndex: 0,
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
    },
    card_arrow: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
    },
    card_arrow_item: {
        backgroundColor: colors.bgButton,
        color: colors.white,
        position: "absolute",
        top: "-1rem",
        borderRadius: "100%",
        width: "3rem",
        height: "3rem",
        paddingLeft: "0.9rem",
        paddingTop: "0.6rem",
        transition: ["0.2s", "ease"],
        "&:hover": {
            transform: "rotate(180deg)",
            cursor: "pointer",
        }
    },
    [`@media (max-width: ${query.mobile}px)`]: {
        section_inner: {
            paddingBottom: "10rem",
            top: "10%"
        }
    },
    [`@media (max-width: ${query.mobileSm}px)`]: {
        card: {
            maxWidth: "30rem",
        }
    },
    err: {
        color: "red",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Content = () => {

    fetch('https://api.coingecko.com/api/v3/exchange_rates')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP : ${response.status}`)
            }
            return response.json()
        })
        .then((exchange_rates) => {
            let inp = document.getElementById('lnum');
            let et = document.querySelector('.card_body_first_num');
            let bt = document.getElementById('Btc');
            let btc = document.getElementById('btc');

            et.innerHTML = `${exchange_rates.rates.eth.value}` + " " + '$';
            btc.innerHTML = `${exchange_rates.rates.btc.value}`;
            bt.innerHTML = `${exchange_rates.rates.btc.value}` + " " + '$';

            inp.addEventListener('input', (e) => {
                if (!e.target.value == 0) {
                    et.innerHTML = `${exchange_rates.rates.eth.value}` * e.target.value + " " + '$';
                } else {
                    et.innerHTML = `${exchange_rates.rates.eth.value}` + " " + '$';
                }
            })
        })
        .catch((error) => {
            const er = document.querySelector('.card_body_first_content');
            const err = document.createElement('h2');
            err.setAttribute('class', `${classes.err}`);
            err.innerHTML = error;


            er.appendChild(err);
        })

    fetch('https://api.coingecko.com/api/v3/global')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then((global) => {
            let uni = document.getElementById('uni');
            let uniTotal = document.getElementById('uniTotal');

            let ot = document.getElementById('ot');
            let otc = document.getElementById('otc');


            uni.innerHTML = global.data.ended_icos;
            uniTotal.innerHTML = global.data.market_cap_change_percentage_24h_usd;

            ot.innerHTML = global.data.ongoing_icos;

            otc.innerHTML = global.data.market_cap_percentage.btc / global.data.market_cap_change_percentage_24h_usd;
        })
        .catch((error) => {
            const er = document.querySelector('.card_body_first_content');
            const err = document.createElement('h2');
            err.setAttribute('class', `${classes.err}`);
            err.innerHTML = error;

            er.appendChild(err);
        })

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
                    <div class=${classes.card_arrow}>
                        <span class=${classes.card_arrow_item}><i class="fa-solid fa-arrow-down"></i></span>
                    </div>
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

$(function() {
    var extra = $(".extra_btn");
    extra.on("click", function() {
        $(".modal_one").css("display", "block");
    });
});


export default Content;