// variable scopic = where a variable is recognised
//                   and accesible (local vs global)

let x = 5; // globally avialable through entire program

function2();

function function1() { // inside {} hence local within it
    //let x = 1;
    console.log(x); // can't be y function cant see in other's function
}
function function2() {
   // let y = 2;
    console.log(y);
}