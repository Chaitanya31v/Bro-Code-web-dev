//NUMBER GUESING GAME

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
// (max - min + 1) :- this tells (number between min and max) = x and 
//                    hence Math.random generates between 0 to x and then
//                    minimum is added to x making answer between min to max
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
   guess = window.prompt("Guess a Number Between 1 to 100");
   guess = Number(guess);

   if(isNaN(guess)){
    window.alert("enter a valid number !");
   }
   else if(guess<=1 || guess>=100){
    window.alert("enter a valid number !")
   }
   else{
    attempts++;
    if(guess < answer){
        window.alert("Number Too Small ! try again");
    }
    else if(guess > answer){
        window.alert("Number Too big ! try again");
    }
    else{
        window.alert("CORRECT! THE ANSWER WAS "+answer+". IT TOOK U "+attempts+" ATTEMTS");
        running = false;
   }
   }
    
}