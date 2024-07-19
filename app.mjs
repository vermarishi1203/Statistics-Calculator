"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

console.log("\nEnter a list of comma-seperated numbers");

const numberString = prompt("Numbers: ");

const listOfNumbers = numberString.split(",").map(item => Number(item.trim()));

// 1,23,58, 25,96 , 5 ,78,5 (sample list of numbers I copy paste in console as user input to check if app is working)

// Rendering Statistics

console.log(`\nMean: ${calculateMean(listOfNumbers)}`);

console.log("The mean of a list of numbers is the average, calculated by taking the sum of all numbers and dividing that by the count of numbers.");

console.log(`\nMedian: ${calculateMedian(listOfNumbers)}`);

console.log("The median of a list of numbers is the number that appears in the middle of the list, when sorted from least to greatest.");

console.log(`\nMode: ${calculateMode(listOfNumbers)}`);

console.log("The mode of a list of numbers is the number that appears most often in the list.");

console.log(`\nRange: ${calculateRange(listOfNumbers)}`);

console.log("The range of a list of numbers is the difference between the largest and smallest numbers in the list.");

console.log(`\nVariance: ${calculateVariance(listOfNumbers)}`);

console.log("The variance of a list of numbers measures how far the values are from the mean, on average.");

console.log(`\nStandard Deviation: ${calculateStandardDeviation(listOfNumbers)}`);

console.log("The standard deviation of a list of numbers is the square root of the variance.");

// Functions to calculate Statistics

function calculateMean (numbers) {

    const mean = numbers.reduce((sum, currentNumber) => sum += currentNumber, 0) / numbers.length;
    
    return mean;

};

function calculateMedian (numbers) {

    const sortedNumbers = numbers.sort((currentNumber, nextNumber)=> currentNumber-nextNumber);
    
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

    const duplicateFreeNumbers = [... new Set( numbers )];
        
    const numbersWithCount = duplicateFreeNumbers.map( number => ({number: number, count: 0}));

    numbers.forEach(number => numbersWithCount.forEach( element => { if (element.number === number) element.count++ }));

    const modeFrequency = numbersWithCount.reduce((maxCount, currentNumber) => maxCount > currentNumber.count ? maxCount : currentNumber.count, 1);

    const mode = modeFrequency === 1 ? null : numbersWithCount.find(number => number.count === modeFrequency).number;

    return mode;

};

function calculateRange (numbers) {
    
    const range = numbers[numbers.length-1] - numbers[0];

    return range;

};

function calculateVariance (numbers) {
    
    const mean = calculateMean(numbers);
    
    const squaredDeviations = numbers.map( deviation => (deviation - mean)*(deviation - mean));

    const variance = calculateMean(squaredDeviations);

    return variance;

};

function calculateStandardDeviation (numbers) {
    
    const variance = calculateVariance(numbers);

    const standardDeviation = Math.sqrt(variance);

    return standardDeviation;

};

