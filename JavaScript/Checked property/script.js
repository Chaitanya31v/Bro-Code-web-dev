//.checked = property that dertmines the checked state of an HTML
//           Checkbox or Radio button element

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const upibtn = document.getElementById("upibtn");
const cashbtn = document.getElementById("cashbtn");
const mysubmit = document.getElementById("mysubmit");
const forsub = document.getElementById("forsub");
const forpay = document.getElementById("forpay");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        forsub.textContent = "thnx for subscribing !";
    }
    else{
        forsub.textContent = "u are not subbed bud !"; 
    }

    if(visabtn.checked){
        forpay.textContent = "u selected VISA";
    }
    else if(upibtn.checked){
        forpay.textContent = "u selected UPI";
    }
    else if(cashbtn.checked){
        forpay.textContent = "u selected CASH";
    }
    else{
        forpay.textContent = "u didn't selected any payment method";
    }

}