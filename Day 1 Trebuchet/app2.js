var fs = require('fs');

const lines = filename =>
 fs
  .readFileSync(filename)
  .toString('utf-8')
  .split('\n');

var wordTextDict = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'oneight': '18',
    'twone': '21',
    'threeight': '38',
    'fiveight': '58',
    'sevenine': '79',
    'eighthree': '83',
    'eightwo': '82',
    'nineight': '98'
}

function hasTextNumber(element) {
    return wordTextDict[element] !== undefined;
}

let arr = lines('input.txt');
let sum = 0;

arr.forEach(line => {
    let numbers = line.match(/[1-9]|oneight|twone|threeight|fiveight|sevenine|eighthree|eightwo|nineight|one|two|three|four|five|six|seven|eight|nine/g);
    console.log("initial:", numbers);

    let numberingArray = numbers.map(function(number) {
        if (hasTextNumber(number)) {
            return wordTextDict[number];
        } else {
            return number;
        }
    });
    console.log("parsed:", numberingArray);

    let joined = numberingArray.join("");
    console.log("joined:",joined)

    let fixedArray = joined.match(/\d/g);
    console.log("fixed:", fixedArray);

    let secondNumber;
    
    if (fixedArray.length === 1) {
        secondNumber = fixedArray[0].toString()
    } else {
        secondNumber = (fixedArray[fixedArray.length - 1]).toString();
    }

    let calibration =  fixedArray[0].toString() + secondNumber;
    console.log(calibration);

    sum += parseInt(calibration);
});

console.log("Total Sum: " + sum);