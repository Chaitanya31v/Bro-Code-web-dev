// Random Password Generator
function generatedPassword(Passwordlength, includelowercase, includeuppercase , includenumbers, includesymbols){
   const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
   const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberschars = "1234567890";
   const symbolchars = "!@#$%^&*()_+-=";
   
   let allowedchars = "";
   let password = ""; 

    allowedchars += includelowercase ? lowercasechar : "";
    allowedchars += includeuppercase ? uppercasechar : "";
    allowedchars += includenumbers ? numberschars : "";
    allowedchars += includesymbols ? symbolchars : "";

    
if(Passwordlength <= 0){
    return"password must be atleast 1";
}
if(allowedchars.length === 0){
    return" at least 1 set of character needs to be selected";
}

for(let i = 0; i < Passwordlength; i++){
    const randomindex = Math.floor(Math.random() * allowedchars.length); 
    password += allowedchars[randomindex];
}

    return password;
}


const Passwordlength = 12;
const includelowercase = false;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;

const password =  generatedPassword(Passwordlength,
                                   includelowercase, 
                                   includeuppercase , 
                                   includenumbers, 
                                   includesymbols);

console.log("generated password:" + password);