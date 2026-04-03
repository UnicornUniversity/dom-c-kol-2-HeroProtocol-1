//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  let simplifiedInput = simplifyInput(inputNumber);
  console.log("Simplified input: " + simplifiedInput);
  let splitNumbers = splitIntoIndividualNumbers(simplifiedInput, 4);
  console.log(splitNumbers);
  let decimalNumbers = [];
  for (let i = 0; i < splitNumbers.length; i++) {
      decimalNumbers.push(convertToDec(splitNumbers[i], 2));
  }
  console.log(decimalNumbers);
  let convertedNumbers=convertToHex(decimalNumbers);
  console.log("Converted "+convertedNumbers);
  return convertedNumbers.join("");
}

function simplifyInput(input){
  let numberOfCharsInput = input.length;
  console.log(numberOfCharsInput);
  if( numberOfCharsInput % 4 ===0){
    return input;
  }
  else{
    let simplifiedInput="";
    let numberOfZeroesToBeAdded=4- (numberOfCharsInput % 4 );
    console.log("Number of zeroes to be added "+ numberOfZeroesToBeAdded)
    for(let zero=1; zero<=numberOfZeroesToBeAdded; zero++){
          simplifiedInput="0"+ simplifiedInput;
    }
    return simplifiedInput+input;
  }
}

function splitIntoIndividualNumbers(input, numberOfChars){
    let splitNumbers=[];
    console.log("Conversion in progress...")
    for(let count=0;count<=input.length; count=count+numberOfChars){
      console.log(
      input.substring(count,count+numberOfChars)
      );
      splitNumbers.push(input.substring(count,count+numberOfChars));
    }
    return splitNumbers.filter(element => element !== '');
}

function convertToDec(input,numberSystem){
  let numberInDec=0;
  let reversedInput=input.split("").reverse().join(""); //reversing so its easier to convert via for loop
  for(let position=reversedInput.length-1; position>=0; position--){
    numberInDec+=reversedInput[position] * Math.pow(numberSystem, position);
    console.log("Converting number "+reversedInput[position]+" to "+reversedInput[position] * Math.pow(numberSystem, position));
  }
  console.log(numberInDec);
  return numberInDec;
}

function convertToHex(inputArray) {
    console.log("Numbers to convert: " + inputArray);
    let convertedNumbers = [];
    for( let i=0; i<=inputArray.length-1;i++){
      console.log(inputArray[i].toString(16));
      convertedNumbers.push(inputArray[i].toString(16))
    }

    return convertedNumbers;
}

/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [2];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [16];
}
