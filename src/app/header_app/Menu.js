import jss from "jss";
import { colors } from "../Theme";
import { Trade } from "./DataMenu";
import { Dao } from "./DataMenu";
import { Ear } from "./DataMenu";
import { More } from "./DataMenu";
import { Bridges } from "./DataMenu";
import * as $ from "jquery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    nav: {
        overflow: "hidden",
        marginRight: "20%",
    },
    nav_list: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        margin: [0, "auto"],
        paddingLeft: "1rem",
    },
    nav_content: {
        width: "10rem",
        zIndex: 5
    },
    nav_item: {
        padding: "1rem",
        margin: [0 , "auto"],
        outline: "none", 
        backgroundColor: "transparent",
        border: "none",
        color: colors.bgText,
        width: "100%",
        "&:hover": {
            backgroundColor: colors.bgCard2,
            cursor: "pointer",
            borderRadius: "1rem",
        }    
    },
    nav_list_sub: {
        paddingLeft: 0,
        marginTop: "0.5rem",
        borderRadius: "1rem",
        backgroundColor: colors.bgCard2,
        display: "none",
        overflow: "auto",
        width: "20rem",
    },
    nav_item_sub: {
        listStyle: "none",
        margin: [0, "auto"],
        padding: "1rem",
        "&:hover": {
            backgroundColor: colors.bgCard,
            cursor: "pointer",
            borderRadius: "1rem",
            color: colors.white,
        }
    },
    nav_item_sub_icon: {
        paddingRight: "1rem",
    },
    arrow: {
        transform: "rotateX(150deg)",
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Menu = () => {
    return `
        <nav class=${classes.nav}>
            <div class=${classes.nav_list}>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Trade <i class="fa-solid fa-angle-down"></i> 
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${Trade.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}><span class=${classes.nav_item_sub_icon}>${d.img}</span>${d.trade}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        DAO <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${Dao.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}>${d.dao}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Ear <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${Ear.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}>${d.ear}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        More <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${More.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}>${d.more}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Bridges <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${Bridges.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}>${d.bridge}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Buy ETH <sup><i class="fa-solid fa-star"></i></sup>
                    </button>
                </div>
            </div>
        </nav>
    `
}

$(function() {
    var item1 = $(".nav_item:eq(0)");
    var item2 = $(".nav_item:eq(1)");
    var item3 = $(".nav_item:eq(2)");
    var item4 = $(".nav_item:eq(3)");
    var item5 = $(".nav_item:eq(4)");

    item1.on("click", function() {
        var list1 = $(".nav_list_sub:eq(0)");
        list1.toggle();
        $(".fa-angle-down:eq(0)").toggleClass(`${classes.arrow}`);
    })
    
    item2.on("click", function() {
        var list2 = $(".nav_list_sub:eq(1)");
        list2.toggle();
        $(".fa-angle-down:eq(1)").toggleClass(`${classes.arrow}`);
    })

    item3.on("click", function() {
        var list3 = $(".nav_list_sub:eq(2)");
        list3.toggle();
        $(".fa-angle-down:eq(2)").toggleClass(`${classes.arrow}`);
    })

    item4.on("click", function() {
        var list4 = $(".nav_list_sub:eq(3)");
        list4.toggle();
        $(".fa-angle-down:eq(3)").toggleClass(`${classes.arrow}`);
    })

    item5.on("click", function() {
        var list5 = $(".nav_list_sub:eq(4)");
        list5.toggle();
        $(".fa-angle-down:eq(4)").toggleClass(`${classes.arrow}`);
    })
})

export default Menu;

