// Temperature conversion program

const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert() {

    if (tofahrenheit.checked) {
        temp = textbox.value;
        temp = Number(temp);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (tocelsius.checked) {
        temp = textbox.value;
        temp = Number(temp);
        temp = temp - 32 * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "select a unit";
    }
}