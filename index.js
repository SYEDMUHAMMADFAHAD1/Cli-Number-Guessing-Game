#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer Will Generate a Random Number (done)
// 2) User Input For Guessing Number (done)
// 3) Compare Using input with computer Generated Number and Show Result (done)
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To Number Guesing Game !");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number Between 1 To 10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You Won You Guessed right number.");
}
else {
    console.log("Sorry! You Lost You Guessed wrong number.");
}
