const x = "red"

x = "light blue"

console.log(x);

function changeToBlue(){
    let inside_x = "blue";

    console.log("Inside the function: " + inside_x); 
}

changeToBlue();

console.log(x);