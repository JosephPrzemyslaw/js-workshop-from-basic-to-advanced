
function app(ballNo) {
    const uniqueNums = [];
    function populateUniqueNums() {
        const MAX_BALL_NO = 99;
        const MIN_BALL_NO = 1;
        // new Array(99).fill().map((el, index) => index + 1)
        for(let i = MIN_BALL_NO; i <= MAX_BALL_NO; i ++) {
            uniqueNums.push(i);
        }
    }

    function pullOutUniqueValue() {
        let randomVal;
        if (uniqueNums.length > 0) {
            const randomIndex = Math.floor(Math.random() * uniqueNums.length);
            randomVal = uniqueNums[randomIndex];
            uniqueNums.splice(randomIndex, 1); // remove the drawn value
        } else {
            randomVal = "-1";
        }

        return randomVal;
    }

    function getRandNumberInHex() {
        const MAX = 16_777_215;
        const rand = Math.round(Math.random() * MAX);
        const hex = rand.toString(16);
    
        return `#${hex}`;
    }
    
    function createBall() {
        const ball = document.createElement("div");
        ball.classList.add("ball");
        ball.textContent = pullOutUniqueValue();
        ball.style.backgroundColor = getRandNumberInHex();
        // ball.style.width = "100px";
        // ball.style.height = "100px";
        // ball.style.backgroundColor = "#f9f9fb";
        // ball.style.borderRadius = "50%";

        return ball;
    }

    function addBall(ball) {
        const container = document.getElementById("lotto");
        container.appendChild(ball);
    }
  
    populateUniqueNums();
    for(let i = 0; i < ballNo; i++) {
        const newBall = createBall();
        addBall(newBall);
    }
}

app(6);
