import "@/app/GlobalStyles";
import Main from "@/app/Main";
import Jss from "@/app/Jss";
import "@/styles/index";

Jss();
Main();

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("nav").style.top = "2.5rem";
    } else {
        document.getElementById("nav").style.top = "-80px";
    }
    prevScrollpos = currentScrollpos;
}