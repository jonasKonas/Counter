let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowerCountBtn");

let count = 0;

addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > "0") {
        counter.style.color = "rgba(26, 207, 105, 0.615)";
    } else if (counter.innerHTML === "0") {
        counter.style.color = "white";
    }
    counter.animate([{ opacity: "0.2" }, { opacity: "0.9" }], {
        duration: 300,
        fill: "forwards"
    });
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < "0") {
        counter.style.color = "rgba(255, 1, 1, 0.601)";
    } else if (counter.innerHTML === "0") {
        counter.style.color = "white";
    }
    counter.animate([{ opacity: "0.2" }, { opacity: "0.95" }], {
        duration: 300,
        fill: "forwards"
    });
}