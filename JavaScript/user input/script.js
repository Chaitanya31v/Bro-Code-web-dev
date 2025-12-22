// How to accept user input

// 1. EASY WAY : Window pormpt
// 2. PROFESSIONAL WAY : HTML textbox 

// let username;
// username = window.prompt("What's ur username ?"); 
// or
// let username = window.prompt("What's ur username ?");
//console.log(username);
let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("header").textContent = "Hello "+username;
 }

