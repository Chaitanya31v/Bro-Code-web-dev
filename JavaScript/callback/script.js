// callback = a fucntion that is passed as an argument to 
//            another function

hello(goodbye);

function hello(callback){
    console.log("hello!");
    callback();
}

function goodbye(){
    console.log("goodbye!");
}