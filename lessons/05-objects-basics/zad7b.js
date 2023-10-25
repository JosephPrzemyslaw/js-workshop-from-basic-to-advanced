// Zmodyfikuj ten kod aby uzyć 'class'

class Ball {
    constructor(color, size) {
        this.color = color;
        this.size = size;
        this.type = 'regular';
        this.pressure = '4.5';
    }
    showDescr(){
        console.log(`This is a ${this.type} ball\n` +
        `Pressure value: ${this.pressure}\n` +
        `Color: ${this.color}\n` + 
        `Size: ${this.size}\n`);
    }
}
 
 const ball = new Ball('yellow', '5');
 const ballDescr = ball.showDescr();
 
 const anotherBall = new Ball('green', '6');
 const anotherBallDescr = ball.showDescr();

 const yetAnotherBall = new Ball('black', '6');
 const yetAnotherBallDescr = ball.showDescr();

 debugger;