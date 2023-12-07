import {fruits} from "./fruits.js";

function remove(event) {
    event.target.remove();
}

const mountingPoint = document.getElementById("mount-point");
const ul = document.createElement("ul");

// {name: "Apple", price: "1zl", details: "piece"}
for(let fruit of fruits) {
    const li = document.createElement("li");
    li.innerHTML = `${fruit.name} (${fruit.price} / ${fruit.details})`;
    li.addEventListener("click", remove);
    ul.appendChild(li);
}

mountingPoint.appendChild(ul);