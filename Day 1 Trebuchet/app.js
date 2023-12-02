var fs = require('fs');

const lines = filename =>
 fs
  .readFileSync(filename)
  .toString('utf-8')
  .split('\n');

let arr = lines('input.txt');
let sum = 0;

arr.forEach(line => {
    let numbers = line.match(/([0-9])+?/g);
    let secondNumber;

    if (numbers.length === 1) {
        secondNumber = numbers[0].toString()
    } else {
        secondNumber = (numbers[numbers.length - 1]).toString();
    }

    let calibration =  numbers[0].toString() + secondNumber;
    //console.log(calibration);

    sum += parseInt(calibration);
});

console.log("Total Sum: " + sum);