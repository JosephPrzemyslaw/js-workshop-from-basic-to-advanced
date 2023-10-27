// // MVC

// // Model
// class ModelCounter {
//   constructor() {
//     this.counter = 0;
//   }
// }

// const model = new Model;

// // View

// class ViewCounter {
//   constructor() {
//     //...
//     // stworz HTMLa dla tego widoku
//   }
// }

// class ViewController {
//   constructor() {
//     model.setCounter(20);
//   }
// }



const counterValue = document.getElementById("counter-value");
let counter = parseInt(counterValue.textContent);

function changeColor() {
  if (counter % 10 === 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "black";
  }
}

function setCounter() {
  changeColor();
  counterValue.textContent = counter;
}

function handlePlusBtnClick() {
  counter = counter + 1;
  setCounter();
}

const plusBtn = document.getElementById("counter-plus");
plusBtn.addEventListener("click", handlePlusBtnClick);

function handleMinusBtnClick() {
  if (counter !== 0) {
    counter = counter - 1;
    setCounter();
  }
}

const minusBtn = document.getElementById("counter-minus");
minusBtn.addEventListener("click", handleMinusBtnClick);


function handleTimesBtnClick() {
  counter = counter * 2;
  setCounter();
}

const timesBtn = document.getElementById("counter-times");
timesBtn.addEventListener("click", handleTimesBtnClick);
