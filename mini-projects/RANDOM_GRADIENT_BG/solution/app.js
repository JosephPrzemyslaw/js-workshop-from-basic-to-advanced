function getRandNumberInHex() { // #ab12FF
    const MAX = 16_777_215;
    const rand = Math.round(Math.random() * MAX);
    const hex = rand.toString(16);

    return `#${hex}`;
}

function changeBgColor(event) {
    if (event.code === "Space") {
        const startColor = getRandNumberInHex();
        const endColor = getRandNumberInHex();
        document.body.style.backgroundImage = `linear-gradient(to right, ${startColor}, ${endColor})`;
        // document.body.style.backgroundColor = getRandNumberInHex();
    }
}

window.addEventListener("keyup", changeBgColor);