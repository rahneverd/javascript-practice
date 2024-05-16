let arrayOfNumbers = [3,2,6,4,0,7,9]
let highestNumber = arrayOfNumbers[0]
let secondHighestNumber

for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > highestNumber) {
    secondHighestNumber = highestNumber
    highestNumber = arrayOfNumbers[i]
  }
}

console.log(`Highest number is ${highestNumber} and secondHighest number is ${secondHighestNumber}`)