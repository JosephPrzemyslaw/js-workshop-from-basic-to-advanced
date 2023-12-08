function getRandNumberInHex() { // #ab12FF
    const MAX = 16_777_215;
    const rand = Math.round(Math.random() * MAX);
    const hex = rand.toString(16);

    return `#${hex}`;
}

//
// CHANGE BG COLOR
//
// function changeBgColor(event) {
//     if (event.code === "Space") {
//         const startColor = getRandNumberInHex();
//         const endColor = getRandNumberInHex();
//         document.body.style.backgroundImage = `linear-gradient(to right, ${startColor}, ${endColor})`;
//         // document.body.style.backgroundColor = getRandNumberInHex();
//     }
// }
// window.addEventListener("keyup", changeBgColor);

//
// CHANGE BG IMAGE
//

const picArr = ["pexels-photo-279648.jpeg", "pexels-photo-827518.jpeg", "pexels-photo-1080721.jpeg", "pexels-photo-1648776.jpeg"];
let currPointer = 0;
function changeBgImage(event) {
    if (event.code === "ArrowLeft" && currPointer > 0) {
        currPointer --;
        const newImgURL = `../pics/${picArr[currPointer]}`;
        document.body.style.backgroundImage = `url(${newImgURL})`;
    } else {
        if (event.code === "ArrowRight" && currPointer < picArr.length - 1) {
            currPointer ++;
            const newImgURL = `../pics/${picArr[currPointer]}`;
            document.body.style.backgroundImage = `url(${newImgURL})`;
        }
    }
}
window.addEventListener("keyup", changeBgImage);