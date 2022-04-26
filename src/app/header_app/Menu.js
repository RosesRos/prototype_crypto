import jss from "jss";
import { colors } from "../Theme";
import { DataMenu } from "./DataMenu";
import * as $ from "jquery";

const createGenerateId = () => {
    return (rule) => `${rule.key}`; 
}

jss.setup({createGenerateId});

const styles = {
    nav: {
        overflow: "hidden",
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
            borderRadius: "0.5rem",
        }    
    },
    nav_list_sub: {
        paddingLeft: 0,
        marginTop: "0.5rem",
        borderRadius: "0.5rem",
        backgroundColor: colors.bgCard2,
        display: "none",
        overflow: "auto",
    },
    nav_item_sub: {
        listStyle: "none",
        margin: [0, "auto"],
        padding: "1rem",
        textAlign: "center",
        "&:hover": {
            backgroundColor: colors.bgCard,
            cursor: "pointer",
            borderRadius: "0.5rem",
        }
    }
}

const {classes} = jss.createStyleSheet(styles).attach();

const Menu = () => {
    return `
        <nav class=${classes.nav}>
            <div class=${classes.nav_list}>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item} id="item1">
                        Trade <i class="fa-solid fa-angle-down"></i> 
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}>${d.coco}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        DAO <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Ear <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        More <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
                    </ul>
                </div>
                <div class=${classes.nav_content}>
                    <button class=${classes.nav_item}>
                        Bridges <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <ul class=${classes.nav_list_sub}>
                        ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
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
    })
    
    item2.on("click", function() {
        var list2 = $(".nav_list_sub:eq(1)");
        list2.toggle();
    })

    item3.on("click", function() {
        var list3 = $(".nav_list_sub:eq(2)");
        list3.toggle();
    })

    item4.on("click", function() {
        var list4 = $(".nav_list_sub:eq(3)");
        list4.toggle();
    })

    item5.on("click", function() {
        var list5 = $(".nav_list_sub:eq(4)");
        list5.toggle();
    })
})

export default Menu;

