let firstValue = Number(prompt("Enter the first value")); // number
let operator = prompt("Enter the operator"); // string
let secondValue = Number(prompt("Enter the second value")); // number

// console.log(typeof firstValue)
// console.log(typeof operator)
// console.log(typeof secondValue)

// console.log(parseInt(firstValue)+parseInt(secondValue))

// if(operator === "+"){
//     console.log(firstValue + secondValue)

// } else if(operator === "-"){
//     console.log(firstValue - secondValue)

// } else if(operator === "*"){
//     console.log(firstValue * secondValue)

// } else if(operator === "/"){
//     console.log(firstValue / secondValue)

// } else {
//     console.log("Please insert a valid operator")
// }

switch (operator) {
  case "+":
    console.log(firstValue + secondValue);
    break;

  case "-":
    console.log(firstValue - secondValue);
    break;

  case "*":
    console.log(firstValue * secondValue);
    break;

  case "/":
    console.log(firstValue / secondValue);
    break;

  default:
    console.log("Invalid operator: " + operator);
}
