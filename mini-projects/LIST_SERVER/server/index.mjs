import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const fruitArr = [{
    name: "Apple",
    price: "1zl",
    details: "piece",
}, {
    name: "Plum",
    price: "4zl",
    details: "1kg",
}, {
    name: "Watermelon",
    price: "5zl",
    details: "1kg",
}, {
    name: "Cherry",
    price: "10zl",
    details: "1kg",
}, {
    name: "Grapes",
    price: "8zl",
    details: "1kg",
}];


app.get("/fruits", function (req, res) {
    const DELAY_SIMULATION = 1000;
    function sendDataAfterFiveSeconds() {
        res.send(fruitArr);
    }
    setTimeout(sendDataAfterFiveSeconds, DELAY_SIMULATION);
})

app.listen(3000);