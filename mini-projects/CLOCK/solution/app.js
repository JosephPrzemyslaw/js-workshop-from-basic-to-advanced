function format(num) {
    return num < 10 ? `0${num}` : `${num}`;
//   let numCorrected;
//   if (num < 10) {
//     numCorrected = `0${num}`;
//   } else {
//     numCorrected = num;
//   }

//   return numCorrected;
}

const clock = document.getElementById("clock");

function update() {
  const date = new Date();
  const [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const hourCorrected = format(hours); // "9" => "09", "15" => "15"
  const minuteCorrected = format(minutes); // "9" => "09", "15" => "15"
  const secondCorrected = format(seconds); // "9" => "09", "15" => "15"

  clock.textContent = `${hourCorrected}:${minuteCorrected}:${secondCorrected}`;
}

update();
setInterval(update, 1000);
//
// how to stop interval
//
// const intervalID = setInterval(update, 1000);
//
// function stop() {
//     clearInterval(intervalID);
// }
// setTimeout(stop, 5000);
