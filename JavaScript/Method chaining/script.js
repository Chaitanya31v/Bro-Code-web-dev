// Method Chaining : callling one method after another
//                   in one continous line of code.

let username = window.prompt("Enter your username: ");

//---------no method chaining--------

// username = username.trim();

// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

//---------no method chaining--------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);