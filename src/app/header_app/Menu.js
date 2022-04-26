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
        marginTop: "1rem",
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
    var first = $(".nav_item:eq(0)");
    first.on("click", function() {
        var item1 = $(".nav_list_sub:eq(0)");
        item1.toggle();
    })
})

export default Menu;

