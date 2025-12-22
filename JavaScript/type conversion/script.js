// Type conversion = change the datatype of a value to another
//                    (Strings , numbers , booleans)--. all are interchangable

// let age = window.prompt("How old are u ??") // took input in string type
// age = Number(age); // chnage datatype to number
// age += 1;

// console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // output : NaN = Not a Number
console.log(y, typeof y);
console.log(z, typeof z);