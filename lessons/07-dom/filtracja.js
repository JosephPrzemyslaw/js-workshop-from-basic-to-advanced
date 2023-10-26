// napisz funkcje do ukrywania / rozmywania i wyszarzania zdjęć
function hideAllPics() {
  const imgs = document.querySelectorAll("img");
  for (let pic of imgs) {
    pic.style.display = "none";
  }
}

function blurAllPics() {
  const imgs = document.querySelectorAll("img");
  for (let pic of imgs) {
    pic.style.filter = "blur(10px)";
  }
}

function makeAllPicsGray() {
  const imgs = document.querySelectorAll("img");
  for (let pic of imgs) {
    pic.style.filter = "grayscale(1)";
  }
}

// złącz wszystko w jedną całość
function processPics(command) {
  const imgs = document.querySelectorAll("img");

  switch (command) {
    case "hide":
      for (let pic of imgs) {
        pic.style.display = "none";
      }
      break;
    case "blur":
      for (let pic of imgs) {
        pic.style.filter = "blur(10px)";
      }
      break;
    case "gray":
      for (let pic of imgs) {
        pic.style.filter = "grayscale(1)";
      }
      break;
      
    default:
      console.error("Command is not supported");
      break;
  }
}

processPics("hide");
processPics("gray");
processPics("blur");

