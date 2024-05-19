const Calculate = document.getElementById("Calculate");
const textbox = document.getElementById("textbox");
const result = document.getElementById("result");
const toCelcius = document.getElementById("toCelcius");
const toFarhanhiet = document.getElementById("toFarhanhiet");

let temp;
function calculate() {
  if (toCelcius.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + " °F";
  } else if (toFarhanhiet.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + " °C";
  } else {
    result.textContent = `Select an unit`;
  }
}
