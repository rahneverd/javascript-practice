let arrayOfNumbers = [3,2,6,4,0,7,9]
let smallestNumber = arrayOfNumbers[0]

for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < smallestNumber) {
        smallestNumber = arrayOfNumbers[i]
    }
}

console.log(`Smallest number is ${smallestNumber}`)
