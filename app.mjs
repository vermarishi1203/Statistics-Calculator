"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

console.log("\n");

console.log("Enter a list of comma-seperated numbers");

const numberString = prompt("Numbers: ");

const listOfNumbers = numberString.split(",").map(item => Number(item.trim()));

// 1,23,58, 25,96 , 5 ,78,5 (sample list of numbers I copy paste in console as user input to check if app is working)

console.log(`Mean: ${calculateMean(listOfNumbers)}`);

console.log(`Median: ${calculateMedian(listOfNumbers)}`);

console.log(`Mode: ${calculateMode(listOfNumbers)}`);

// Functions to calculate Statistics

function calculateMean (numbers) {

    const mean = numbers.reduce((sum, currentNumber) => sum += currentNumber, 0) / numbers.length;
    
    return mean;

};

function calculateMedian (numbers) {

    const sortedNumbers = numbers.sort((currentNumber, nextNumber)=> currentNumber-nextNumber);
    
    if (sortedNumbers.length % 2 === 0) {

        const middleIndex1 = sortedNumbers.length / 2;

        const middleIndex2 = middleIndex1 + 1;
        
        const median = (sortedNumbers[middleIndex1] + sortedNumbers[middleIndex2]) / 2;

        return median;

    }

    else {

        const median = sortedNumbers[Math.floor(sortedNumbers.length / 2)];

        return median;

    }

};

function calculateMode (numbers) {

    // logic is incorrect !
    // const numberWithCount = numbers.map( number => {
        
    //     const numIndex = numbers.indexOf(number);

    //     if (numbers.includes(number)) {
    //         numberWithCount[numIndex].count++; 
    //     }
    //     else {
    //         return {number: number, count: 1}
    //     }
    // })

    const modeFrequency = numberWithCount.reduce((maxCount, currentNumber) => maxCount > currentNumber.count ? maxCount : currentNumber.count, 1);

    const mode = numberWithCount.find(number => number.count === modeFrequency)

    return mode;

}