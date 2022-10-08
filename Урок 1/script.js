const name = "Tune";

let contet = 0;
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

const span = document.querySelector("span");
span.textContent = contet;
plus.addEventListener("click", () => {
  contet++;
  span.textContent = contet;
});
minus.addEventListener("click", () => {
  contet--;
  span.textContent = contet;
});
span.textContent = contet;

span.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('https://i.pinimg.com/736x/25/b8/40/25b840dad0f0dd4ebc9b50c16a53c20a.jpg')";
});
