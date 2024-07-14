"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

console.log("\n");

console.log("Enter a list of comma-seperated numbers");

const numberString = prompt("Numbers: ");

const listOfNumbers = numberString.split(",").map(item => Number(item.trim()));

// 1,23,58, 25,96 , 5 ,78,5 (sample list of numbers I copy paste in console as user input to check if app is working)

const mean = listOfNumbers.reduce((sum, currentNumber) => sum += currentNumber, 0) / listOfNumbers.length ;

console.log(`Mean: ${mean}`);
