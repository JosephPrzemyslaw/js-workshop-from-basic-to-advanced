
const counterValue = $("#counter-value");
const plusBtn = $("#counter-plus");
const minusBtn = $("#counter-minus");

function changeColor() {
    const currValue = parseInt(counterValue.text());
    counterValue.css("color", currValue % 5 === 0 ? "orange" : "black");
}

function handlePlusBtnClick() {
    counterValue.text(parseInt(counterValue.text()) + 1);
    changeColor();
}

plusBtn.click(handlePlusBtnClick);

function handleMinusBtnClick() {
    const currValue = parseInt(counterValue.text());
    if (currValue > 0) {
        counterValue.text(parseInt(counterValue.text()) - 1);
        changeColor();
    }
}

minusBtn.click(handleMinusBtnClick);

changeColor();