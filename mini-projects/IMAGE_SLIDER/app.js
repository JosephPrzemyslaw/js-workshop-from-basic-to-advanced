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
container.style.backgroundImage = `url(./img/${carPaths[carIndex]})`;


function updateSlider(event) {
    if (event.key = "ArrowRight") {
        carIndex ++;
        container.style.backgroundImage = `url(./img/${carPaths[carIndex]})`;
    } else {
        if (event.key = "ArrowLeft") {
            carIndex --;
            container.style.backgroundImage = `url(./img/${carPaths[carIndex]})`;
        }
    }
}


document.addEventListener("keydown", updateSlider);