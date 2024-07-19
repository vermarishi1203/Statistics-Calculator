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

console.log(`Range: ${calculateRange(listOfNumbers)}`);

console.log(`Variance: ${calculateVariance(listOfNumbers)}`);



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



