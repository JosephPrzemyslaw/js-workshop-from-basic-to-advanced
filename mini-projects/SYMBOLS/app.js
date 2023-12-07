
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

function addSymbols(num) {
    for (let i = 0; i < num; i++) {
        const iEl = document.createElement("div");
        // https://www.w3schools.com/charsets/ref_utf_symbols.asp
        iEl.innerHTML = "&#9786;";
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
    const symbols = document.querySelectorAll("div");
    for(let symbol of symbols) {
        setRandPosition(symbol);
    }
}

addSymbols(100);
setInterval(() => animate(), 5000);


