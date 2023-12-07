
const counterValue = document.getElementById("counter-value");
const plusBtn = document.getElementById("counter-plus");
const minusBtn = document.getElementById("counter-minus");

function changeColor() {
    const currValue = parseInt(counterValue.textContent);
    counterValue.style.color = currValue % 5 === 0 ? "orange" : "black";
}

function handlePlusBtnClick() {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
    changeColor();
}

plusBtn.addEventListener("click", handlePlusBtnClick);

function handleMinusBtnClick() {
    const currValue = parseInt(counterValue.textContent);
    if (currValue > 0) {
        counterValue.textContent = parseInt(counterValue.textContent) - 1;
        changeColor();
    }
}

minusBtn.addEventListener("click", handleMinusBtnClick);

changeColor();