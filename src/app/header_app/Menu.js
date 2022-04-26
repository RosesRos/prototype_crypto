import jss from "jss";
// import { colors } from "../Theme";
import { DataMenu } from "./DataMenu";

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
    },
    nav_item: {
        padding: "1rem",
        listStyle: "none",
        margin: [0 , "auto"],
        outline: "none",      
    },
    nav_list_sub: {
        paddingLeft: 0,
        marginTop: "1rem",
    },
    nav_item_sub: {
        listStyle: "none",
        margin: [0, "auto"],
        padding: "1rem",
        paddingLeft: 0,
    }
}

const {classes} = jss.createStyleSheet(styles).attach();


const Menu = () => {
    return `
        <nav class=${classes.nav}>
            <ul class=${classes.nav_list}>
                <li class=${classes.nav_item}>
                    Trade <i class="fa-solid fa-angle-down"></i> 
                    <ul class=${classes.nav_list_sub}>
                        ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key=${d.id}>${d.coco}</li>`).join(" ")}
                    </ul>
                </li>
                <li class=${classes.nav_item}>
                    DAO <i class="fa-solid fa-angle-down"></i>
                    <ul class=${classes.nav_list_sub}>
                    ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
                    </ul>
                </li>
                <li class=${classes.nav_item}>
                    Ear <i class="fa-solid fa-angle-down"></i>
                    <ul class=${classes.nav_list_sub}>
                    ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
                    </ul>
                </li>
                <li class=${classes.nav_item}>
                    More <i class="fa-solid fa-angle-down"></i>
                    <ul class=${classes.nav_list_sub}>
                    ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
                    </ul>
                </li>
                <li class=${classes.nav_item}>
                    Bridges <i class="fa-solid fa-angle-down"></i>
                    <ul class=${classes.nav_list_sub}>
                    ${DataMenu.map((d) => `<li class=${classes.nav_item_sub} key="${d.id}">${d.coco}</li>`).join(" ")}
                    </ul>
                </li>
                <li class=${classes.nav_item}>
                    Buy ETH <sup><i class="fa-solid fa-star"></i></sup>
                </li>
            </ul>
        </nav>
    `
}

export default Menu;

