//let input1 = prompt("Enter your value: ");
//let input2 = prompt("Enter your value: ");
//let operatorIn = prompt("Enter your operator (1,2,3,4)");

//let numOpp = parseInt(operatorIn);
//let num1 = parseInt(input1);
//let num2 = parseInt(input2);


//begin button scanning vales
let num1 = '';
let sign = '';
const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const oppBtn = document.querySelectorAll('[data-opp]');
const result = document.querySelectorAll('[data-equal]');

oppBtn.forEach((button) => {
 button.addEventListener('click', () => setOp(button.textContent))
})

result.forEach((button) => {
    button.addEventListener('click', () => evaluate(sign))
})



buttons.forEach((button) => {
        button.addEventListener('click', () => {
        num1 = num1 + button.textContent;
        display.textContent = "";
        display.textContent = num1;
        actualNum = parseInt(num1);
        console.log("num1 = " + num1);
        console.log("Actualnum1 = " + actualNum);        
     });
});


function setOp(operator) {
    firstOp = actualNum;
    sign = operator;
    currentStep = `${firstOp} ${sign}`
    console.log('setOp function works: ' + currentStep);
    num1 = '';
}

function evaluate() {
    secondOp = actualNum;
    if (sign = '+') {
        add(firstOp,actualNum)
    }
    console.log('Equation: ' + `${firstOp} ${sign} ${actualNum}`);
    
}

    const display = document.createElement('p');
    display.classList.add('display');
    container.appendChild(display);

    const final = document.createElement('p');
    final.classList.add('display');
    container.appendChild(final);


    function add(num1,num2) { 
        //alert(num1 + num2);
        let sum = num1 + num2;
        display.textContent = "";
        final.textContent = sum;
        console.log('final: ' + sum);
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
    
    function choice() {
        sign = "on";
    }
    