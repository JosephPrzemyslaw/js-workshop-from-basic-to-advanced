/* <i class="fa-solid fa-tree"></i> */

/**
 * Function returns the random integer value between <0; max> and adds "px"
 * 
 * @param {number} max - maximum number to be drawn
 * @returns - random number
 */
function getRandNumberInPx(max) {
    const rand = Math.round(Math.random() * max);
    return `${rand}px`;
}

function getRandNumberInHex() {
    const MAX = 16_777_215;
    const rand = Math.round(Math.random() * MAX);
    const hex = rand.toString(16);

    return `#${hex}`;
}

function addStars(num) {
    for (let i = 0; i < num; i++) {
        const iEl = document.createElement("i"); // <i></i>
        iEl.classList.add("fa-solid", "fa-star", "fa-spin"); // <i class="fa-solid fa-star"></i>
        setRandPosition(iEl);
        iEl.style.color = getRandNumberInHex();
        iEl.style.fontSize = getRandNumberInPx(40);
        document.body.appendChild(iEl);
    }
}

function setRandPosition(el) {
    el.style.top = getRandNumberInPx(window.innerHeight);
    el.style.left = getRandNumberInPx(window.innerWidth);
}

function animate() {
    const stars = document.querySelectorAll("i");
    for(let star of stars) {
        setRandPosition(star);
    }
}

addStars(100);
setInterval(() => animate(), 5000);


