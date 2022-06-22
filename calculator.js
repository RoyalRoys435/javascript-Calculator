const operator = prompt('enter operator(enter either +, - , * or /): ');
const num1 = parseFloat(prompt("please enter your number : "));
const num2 = parseFloat(prompt("please enter other number : "));
 
let result;

if (operator == '+') {
    result= num1 + num2
}
else if(operator == '-'){
    result= num1-num2
}
else if(operator == '*'){
    result = num1 * num2
}
else{

    result = num1 / num2
}
console.log(`${num1} ${operator} ${num2} = ${result}`);
