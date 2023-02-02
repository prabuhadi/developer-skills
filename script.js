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

// NEXT PHASE
/*
Convert current temperature celcius to kelvin (absolute temperature)
*/
// console.log('This is normal');
// console.warn('This is warning');
// console.error('This is error');

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: parseInt(prompt('Degree celsius: ')), // Output of prompt always string
    value: 26,
  };
  // B) FIND
  console.table(measurement);
  console.log(typeof measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY BUG
console.log(measureKelvin());

// D) DEBUGGING
// Output value is not a number, convert string into number
// use Number() or parseInt()

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// 1) IDENTIFY
// min = 0 is the lowest number compare to array

// CODING CHALLANGE TODO

console.log('========== CHALLANGE =========');

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elemnts and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Example:
console.log(
  `... ${data1[0]}°C in 1 days ... ${data1[1]}°C in 2 days ... ${data1[2]}°C in 3 days ...`
);

const printForecast = function (arr) {
  // const arr = data1.concat(data2);
  let str = ''; // for transforming array to string purpose
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `; // str + str same as str +=
  }
  return console.log('... ' + str);
};
printForecast(data1);
