//Problem#1

// let num1 = prompt("Enter your first Number");
// let num2 = prompt("Enter your Second Number");

// if (num1 > num2) {
//     console.log("The arger number is " + num1);
// }
// else if (num2 > num1) {
//     console.log("The larger number is " + num2);
// }
// else(
//     console.log("Numbers are equal")
// )


//Problem#2

// var num4 = parseInt(prompt("Enter a number:"));
// var sign = Math.sign(num4);  //This method retuns whether a number is negative, positive or zero

// if (sign == 1) {
//     alert("The sign is +");
// }
// else if (sign == -1) {
//     alert("The sign is -");
// }
// else {
//     alert("The sign is 0");
// }

//Problem#3

// var num1 = Number(prompt("Enter number 1:"));
// var num2 = Number(prompt("Enter number 2:"));
// var num3 = Number(prompt("Enter number 3:"));
// var num4 = Number(prompt("Enter number 4:"));
// var num5 = Number(prompt("Enter number 5:"));

// var largest = num1;

// if (num2 > largest) {
//     largest = num2;
// }
// if (num3 > largest) {
//     largest = num3;
// }
// if (num4 > largest) {
//     largest = num4;
// }
// if (num5 > largest) {
//     largest = num5;
// }

// console.log("The largest number is " + largest);


//Problem#4

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     }
//     else {
//         console.log(i + " is odd");
//     }
// }

//Problem#5

// let marks = prompt("What is your marks");

// if(marks > 90){
//     console.log("Grade A");
// }
// else if (marks > 80 ){
//     console.log("Grade B");
// }
// else if (marks > 70 ){
//     console.log("Grade C");
// }
// else if (marks > 60 ){
//     console.log("Grade D");

// }
// else{
//     console.log("Grade F");
//     console.log("Failed");
// }

//Problem#6


// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

//Problem#7



var stars = 8;
let string = "";

for (let i = 1; i <= stars; i++) {
    for (let j = 1; j <= stars- i; j++) {
        string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);