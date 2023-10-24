
switch (text) {
  case "start":
    result = "S";
    break;
  case "not ready":
  case "broken":
    result = "NR";
    break;
  case "about to start":
    result = "ATS";
    break;
  case "working":
    result = "W";
    break;
}
console.log(result);
