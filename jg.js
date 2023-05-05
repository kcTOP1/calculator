let input1 = prompt("Enter your value: ");
let input2 = prompt("Enter your value: ");
let operatorIn = prompt("Enter your operator (1,2,3,4)");

let numOpp = parseInt(operatorIn);
let num1 = parseInt(input1);
let num2 = parseInt(input2);


function add(num1,num2) {
    alert(num1 + num2);
    
}

function subtract(num1,num2) {
    alert(num1 - num2);
}

function multiply(num1,num2) {
    alert(num1 * num2);
}

function divide(num1,num2) {
    alert(num1 / num2);
}

function operator() {
    if (numOpp === 1) {
        add(num1,num2);
    } else if (numOpp === 2) {
        subtract(num1,num2);
    } else if (numOpp === 3) {
        divide(num1,num2);
    } else if (numOpp === 4) {
        multiply(num1,num2);
    } else {
        alert("error");
    }
}

operator(num1,num2);



