import {cfg} from "./cfg.js";

const mountingPoint = document.getElementById("mount-point");

function setLoadingVisibility(isVisible = true) {
    mountingPoint.textContent = isVisible ? "Loading ..." : "";
}

function createListItem(listData) {
    const li = document.createElement("li");
    li.innerHTML = `${listData.name} (${listData.price} / ${listData.details})`;
    li.addEventListener("click", event => event.target.remove());

    return li;
}

async function addFruits() {
    const endPoint = "http://localhost:3000/fruits";
    let resp, fruits;

    try {
        if (cfg.httpClient === "axios") {
            resp = await axios.get(endPoint, {timeout: 3000});
            fruits = resp.data;
        } else {
            resp = await fetch(endPoint);
            fruits = await resp.json();
        }
    } catch(err) {
        mountingPoint.textContent = err.message;
        return;
    }

    const ul = document.createElement("ul");

    for(let fruit of fruits) {
        const li = createListItem(fruit);
        ul.appendChild(li);
    }

    setLoadingVisibility(false);
    mountingPoint.appendChild(ul);
}

setLoadingVisibility();
addFruits();