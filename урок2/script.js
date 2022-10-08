let resultBle = 0;
let resultRed = 0;
const redButton = document.querySelector(".red");
const bleButton = document.querySelector(".ble");
const message = document.querySelector(".message");

function start() {
  setTimeout(() => {
    console.log("pon");
    message.textContent = "";
    redButton.addEventListener("click", () => {
      resultRed++;
      console.log(resultRed, resultBle);
    });

    bleButton.addEventListener("click", () => {
      resultBle++;
      console.log(resultRed, resultBle);
    });
  }, 1000);
  setTimeout(() => {
    if (resultRed > resultBle) {
      message.textContent = "winne red";
    } else {
      message.textContent = "winne ble";
    }
  }, 6000)
