let div1 = document.querySelector("div");

div1.addEventListener("mouseover", () => {
    console.log("handle 1");
});

div1.addEventListener("mouseover", () => {
    console.log("handle 2");
});
const hand3 = () => {
    console.log("handle 3");
}
div1.addEventListener("mouseover", hand3);
div1.addEventListener("mouseover", () => {
    console.log("handle 4");
});

// remove event
div1.removeEventListener("mouseover", hand3);