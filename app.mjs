"use strict";

import promptSync from "prompt-sync";

import chalk from "chalk";

const prompt = promptSync({sigint: true});

console.log(chalk.magentaBright("\nEnter a list of comma-seperated numbers"));

const numberString = prompt(chalk.greenBright("Numbers: "));

const listOfNumbers = numberString.split(",").map(item => Number(item.trim()));

// Rendering Statistics

console.log(chalk.bold.cyanBright(`\nMean: ${calculateMean(listOfNumbers)}`));

console.log("The mean of a list of numbers is the average, calculated by taking the sum of all numbers and dividing that by the count of numbers.");

console.log(chalk.bold.cyanBright(`\nMedian: ${calculateMedian(listOfNumbers)}`));

console.log("The median of a list of numbers is the number that appears in the middle of the list, when sorted from least to greatest.");

console.log(chalk.bold.cyanBright(`\nMode: ${calculateMode(listOfNumbers)}`));

console.log("The mode of a list of numbers is the number that appears most often in the list.");

console.log(chalk.bold.cyanBright(`\nRange: ${calculateRange(listOfNumbers)}`));

console.log("The range of a list of numbers is the difference between the largest and smallest numbers in the list.");

console.log(chalk.bold.cyanBright(`\nVariance: ${calculateVariance(listOfNumbers)}`));

console.log("The variance of a list of numbers measures how far the values are from the mean, on average.");

console.log(chalk.bold.cyanBright(`\nStandard Deviation: ${calculateStandardDeviation(listOfNumbers)}`));

console.log("The standard deviation of a list of numbers is the square root of the variance.");

// Functions to calculate Statistics

function calculateMean (numbers) {

    const mean = numbers.reduce((sum, currentNumber) => sum += currentNumber, 0) / numbers.length;
    
    return mean;

};

function calculateMedian (numbers) {

    const sortedNumbers = numbers.slice().sort((currentNumber, nextNumber)=> currentNumber-nextNumber);
    
    if (sortedNumbers.length % 2 === 0) {

        const middleIndex2 = sortedNumbers.length / 2;

        const middleIndex1 = middleIndex2 - 1;
        
        const median = (sortedNumbers[middleIndex1] + sortedNumbers[middleIndex2]) / 2;

        return median;

    }

    else {

        const median = sortedNumbers[Math.floor(sortedNumbers.length / 2)];

        return median;

    }

};

function calculateMode (numbers) {

    const numbersWithCount = {};

    numbers.forEach(number => numbersWithCount[number] = ( numbersWithCount[number] || 0) +1 );

    if (new Set(Object.values(numbersWithCount)).size === 1) return null;

    const modeFrequency = Math.max(...Object.values(numbersWithCount));

    const arrayOfModes = Object.keys(numbersWithCount).filter(number => numbersWithCount[number] === modeFrequency);

    const stringOfModes = arrayOfModes.join(", ");

    return stringOfModes;
 
};

function calculateRange (numbers) {
    
    const range = Math.max(...numbers) - Math.min(...numbers);

    return range;

};

function calculateVariance (numbers) {
    
    const mean = calculateMean(numbers);
    
    const squaredDeviations = numbers.map( deviation => (deviation - mean) ** 2);

    const variance = calculateMean(squaredDeviations);

    return variance;

};

function calculateStandardDeviation (numbers) {
    
    const variance = calculateVariance(numbers);

    const standardDeviation = Math.sqrt(variance);

    return standardDeviation;

};

