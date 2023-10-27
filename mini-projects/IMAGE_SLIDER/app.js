let carIndex = 0;
const carPaths = [
    "small_pexels-matthias-zomer-small_69020.jpg",
    "small_pexels-mike-b-166680.jpg",
    "small_pexels-mike-b-7459480.jpg",
    "sport_pexels-albin-berlin-919073.jpg",
    "sport_pexels-pixabay-39501.jpg",
    "sport_pexels-pixabay-358070.jpg",
    "toy_pexels-pixabay-35619.jpg",
    "toy_pexels-pixabay-35967.jpg",
    "toy-pexels-alexgtacar-1592384.jpg",
];

// initialization
const container = document.querySelector(".slider-container");
updateBackground();

function updateBackground() {
    container.style.backgroundImage = `url(./img/${carPaths[carIndex]})`;
}

function handleRight() {
    carIndex ++;
    if (carIndex === carPaths.length){
        carIndex = 0;
    }
    updateBackground();
}

function handleLeft() {
    carIndex --;
    if (carIndex === -1){
        carIndex = carPaths.length - 1;
    }
    updateBackground();
}

function updateSlider(event) {
    switch(event.key) {
        case "ArrowRight":
            handleRight();
            break;
        case "ArrowLeft":
            handleLeft();
            break;
    }
}

document.addEventListener("keydown", updateSlider);