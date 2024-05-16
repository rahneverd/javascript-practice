let arrayOfNumbers = [3,2,6,4,0,7,9]
let smallestNumber = arrayOfNumbers[0]
let secondSmallestNumber

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < smallestNumber) {
        secondSmallestNumber = smallestNumber
        smallestNumber = arrayOfNumbers[i]
    }}

    console.log(`Smallest number is ${smallestNumber} and second smallest number is ${secondSmallestNumber}`)