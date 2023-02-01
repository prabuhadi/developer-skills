// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 'test';
// if (x === 'test') console.log('test complete');

// const calcAge = birthYear => 2032 - birthYear;

// console.log(calcAge(1999));

// TODO
/* 
PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given a array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problem
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

// ANSWER
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue; // skiping 'string' array
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(
    `Maximum temperature is ${max}, and Minimum temperature is ${min}`
  );
  let amp = max - min;
  return console.log(`Temperature Amplitude is ${amp}`);
};

calcTempAmplitude(temperatures);

// TODO
/*
PROBLEM 2:
Function should now receive 2 arrays of temperatures.
*/

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problem
// - How to merge 2 arrays

// ANSWER
const temp1 = temperatures;
const temp2 = [-6, -4, -7, 2, -8, 6, 'error', 9, 14, 19, 16];
const allTemps = temp1.concat(temp2);

const calcTempAmplitudeNew = function () {
  let max = allTemps[0];
  let min = allTemps[0];
  for (let i = 1; i < allTemps.length; i++) {
    if (typeof allTemps[i] !== 'number') continue; // skiping 'string' array
    if (allTemps[i] > max) max = allTemps[i];
    if (allTemps[i] < min) min = allTemps[i];
  }
  console.log(
    `Maximum temperature is ${max}, and Minimum temperature is ${min}`
  );
  let amp = max - min;
  return console.log(`Temperature Amplitude is ${amp}`);
};

calcTempAmplitudeNew(temperatures);
