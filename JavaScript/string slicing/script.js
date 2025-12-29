// string slicing : creating a substring
//                  from a portion of another string

//                  string.slice(start,end)
const fullname = "Bro Code";

// let firstname = fullname.slice(0,3); // start included /end not included
// let lastname = fullname.slice(4,8)
// let firstchar = fullname.slice(0,1);
// let lastchar = fullname.slice(-4); // coun from the end

let firstname = fullname.slice(0,fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);
//dynamically better way
console.log(firstname);
console.log(lastname);

const email = "chaitanyaverma31v@gmail.com";
const username = email.slice(0,email.indexOf("@"));
console.log(username);