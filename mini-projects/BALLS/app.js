import cfg from "./cfg.js";

if (cfg.amount > cfg.max - cfg.min + 1) {
    throw new Error("wrong input");
}

class Ball {
    constructor(num) {
        this.el = document.createElement("div");
        this.el.classList.add("lotto-ball");
        this.el.textContent = num;
    }
    getEl() {
        return this.el;
    }
}

class App {
    constructor(mountingPoint) {
        this.cont = document.querySelector(mountingPoint);
        this.balls = new Array(cfg.max - cfg.min + 1);
    }
    populateBallAr() {
        for (let i = 0; i < this.balls.length; i ++) {
            this.balls[i] = cfg.min + i;
        }
    }
    addBalls() {
        for(let i = 0; i < cfg.amount; i++) {
            const ball = new Ball(this.getBallNo());
            this.cont.appendChild(ball.getEl());
        }
    } 
    getBallNo() {
        const randomIndex = Math.round(Math.random() * (this.balls.length - 1));
        const randomVal = this.balls[randomIndex];
        this.balls.splice(randomIndex, 1);

        return randomVal;
    }
    run() {
        this.populateBallAr();
        this.addBalls();
    }
}

const app = new App(".lotto-container");
app.run();
