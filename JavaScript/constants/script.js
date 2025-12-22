// const = variables that can't be changed
const PI = 3.14159; // constants in uppercase is a good practice
let radius;
let circumference;

//radius = window.prompt("what's the radius");
radius = Number(radius);

// pi = 232; throws error
document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
circumference = 2 * PI * radius;
 document.getElementById("myh3").textContent = circumference + "cm";
}
