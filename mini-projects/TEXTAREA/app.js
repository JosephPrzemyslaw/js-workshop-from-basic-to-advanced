const MAX_CHARACTER_NO = 23;
const textArea = document.getElementById("mail-content-textarea");
const counter = document.getElementById("mail-content-counter");

function updateCounter() {
  counter.textContent = `${textArea.value.length}/${MAX_CHARACTER_NO}`;
}

function handleTextAreaChange() {
  const curValueTextArea = textArea.value;
  if (curValueTextArea.length > MAX_CHARACTER_NO) {
    const newTextAreaValue = curValueTextArea.substring(0, MAX_CHARACTER_NO);
    textArea.value = newTextAreaValue;
  }
  updateCounter();
}

updateCounter();
textArea.addEventListener("input", handleTextAreaChange);
