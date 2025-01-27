var x = "red"

console.log(x);

function changeToBlue(){
    let inside_x = "blue";

    console.log("Inside the function: " + inside_x); 
}

changeToBlue();

console.log("Inside the function: " + inside_x)

console.log(x);