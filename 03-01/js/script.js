//Function Decalaration

function doAddition(a, b){
    let c = a + b;

    return c;
}

//Function Expression
const doMutiplication = function (a,b){
    let c = a * b;
    return c;
}

console.log("Data from function declaration: ", doAddition(25,36));

console.log("Data from function Expression:  ", doMutiplication(5,5));

//Immediatly invoke function
(function() {
    let a = 5;
    let b = 6;
    let c = doAddition(a,b);
    console.log(`The sum of a and b is: ${c}`);
    
})();

