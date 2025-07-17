let div = document.querySelector("div");
let para = document.querySelector("p");
let currMode = "light";

div.addEventListener("mouseover", () => {
    if (currMode === "light") {
        currMode = "dark";
        console.log(currMode);
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
     else {
        currMode = "light";
        console.log(currMode);
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
        
})