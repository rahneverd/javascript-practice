let arrayOfNumbers = [3,2,6,4,0,7,9]
highestNumber = arrayOfNumbers[0]

for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > highestNumber) {
        highestNumber = arrayOfNumbers[i]
    }
}

console.log(`Highest number is ${highestNumber}`)