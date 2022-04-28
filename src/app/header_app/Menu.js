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
    nav_item_sub_icons: {
        // backgroundColor: `${colors.bgPrice}`,
        borderRadius: "50%",
        padding: "0.5rem",
        // paddingTop: "0.4rem",
        fontSize: "1rem",
        width: "2.4rem",
        height: "2.4rem",
        marginRight: "0.5rem",
        color: colors.white
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
                        ${Dao.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}><span class=${classes.nav_item_sub_icon}>${d.img}</span>${d.dao}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Ear <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${Ear.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}><span class=${classes.nav_item_sub_icon}>${d.img}</span>${d.ear}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        More <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${More.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}><span class=${classes.nav_item_sub_icon}>${d.img}</span>${d.more}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Bridges <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${Bridges.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}><span class=${classes.nav_item_sub_icons}>${d.img}</span>${d.bridge}</li>`).join(" ")}
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
    var item1 = $(".nav_content:eq(0)");
    var item2 = $(".nav_content:eq(1)");
    var item3 = $(".nav_content:eq(2)");
    var item4 = $(".nav_content:eq(3)");
    var item5 = $(".nav_content:eq(4)");

    item1.mouseenter(
        function() {
        var list1 = $(".nav_list_sub:eq(0)");
        list1.css("display", "block");
        $(".fa-angle-down:eq(0)").toggleClass(`${classes.arrow}`);
    });

    item1.mouseleave(function() {
        var list1 = $(".nav_list_sub:eq(0)");
        list1.css("display", "none");
        $(".fa-angle-down:eq(0)").removeClass(`${classes.arrow}`);
    });
    
    item2.mouseenter(
        function() {
        var list1 = $(".nav_list_sub:eq(1)");
        list1.css("display", "block");
        $(".fa-angle-down:eq(1)").toggleClass(`${classes.arrow}`);
    });

    item2.mouseleave(function() {
        var list1 = $(".nav_list_sub:eq(1)");
        list1.css("display", "none");
        $(".fa-angle-down:eq(1)").removeClass(`${classes.arrow}`);
    });

    item3.mouseenter(
        function() {
        var list1 = $(".nav_list_sub:eq(2)");
        list1.css("display", "block");
        $(".fa-angle-down:eq(2)").toggleClass(`${classes.arrow}`);
    });

    item3.mouseleave(function() {
        var list1 = $(".nav_list_sub:eq(2)");
        list1.css("display", "none");
        $(".fa-angle-down:eq(2)").removeClass(`${classes.arrow}`);
    });

    item4.mouseenter(
        function() {
        var list1 = $(".nav_list_sub:eq(3)");
        list1.css("display", "block");
        $(".fa-angle-down:eq(3)").toggleClass(`${classes.arrow}`);
    });

    item4.mouseleave(function() {
        var list1 = $(".nav_list_sub:eq(3)");
        list1.css("display", "none");
        $(".fa-angle-down:eq(3)").removeClass(`${classes.arrow}`);
    });

    item5.mouseenter(
        function() {
        var list1 = $(".nav_list_sub:eq(4)");
        list1.css("display", "block");
        $(".fa-angle-down:eq(4)").toggleClass(`${classes.arrow}`);
    });

    item5.mouseleave(function() {
        var list1 = $(".nav_list_sub:eq(4)");
        list1.css("display", "none");
        $(".fa-angle-down:eq(4)").removeClass(`${classes.arrow}`);
    });
    
    var icon1 = $(".nav_item_sub_icons:eq(0)");
    var icon2 = $(".nav_item_sub_icons:eq(1)");
    var icon3 = $(".nav_item_sub_icons:eq(2)");
    var icon4 = $(".nav_item_sub_icons:eq(3)");
    var icon5 = $(".nav_item_sub_icons:eq(4)");
    var icon6 = $(".nav_item_sub_icons:eq(5)");

    icon1.css("background-color", `${colors.bgPrice}`);
    icon2.css("background-color", `${colors.bgPercent2}`);
    icon3.css("background-color", `#C61313`);
    icon4.css("background-color", `${colors.bgEthe}`);
    icon5.css("background-color", `${colors.bgPrimary}`);
    icon6.css("background-color", `${colors.bgConnet}`);

})

export default Menu;

