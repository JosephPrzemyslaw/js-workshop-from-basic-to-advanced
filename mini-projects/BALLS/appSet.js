import cfg from "./cfg.js";

if (cfg.amount > cfg.max - cfg.min + 1) {
    throw new Error("wrong input");
}


// const balls = new Array(cfg.max - cfg.min + 1)
//     .fill()
//     .map((value, index) => cfg.min + index);

// create random ball numbers
const ballNumbers = new Set();
while (ballNumbers.size < cfg.amount) {
    ballNumbers.add(Math.floor(Math.random() * (cfg.max - cfg.min + 1)) + cfg.min);
}

for(let ballNo of ballNumbers) {
    // <div class="lotto-ball">1</div>
    // create a ball
    const ball = document.createElement("div");
    ball.classList.add("lotto-ball");
    ball.textContent = ballNo;

    // add ball to the container
    const cont = document.querySelector(".lotto-container");
    cont.appendChild(ball);
}