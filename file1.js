console.log(Welcome_message)
let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;
console.log(addage)
console.log(subage)     
console.log(mulage)
console.log(divage)
console.log("webpage")
console.log(aera * aera)




let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;
console.log("Addition: " + sum);

let difference = num1 - num2;
console.log("Subtraction: " + difference);

let product = num1 * num2;
console.log("Multiplication: " + product);

if (num2 !== 0) {
    let quotient = num1 / num2;
    console.log("Division: " + quotient);
} else {
    console.log("Division: Cannot divide by zero.");
}