let arrayOfNumbers = [1,2,3,3,3,2,4,4,5,5,5,5,6,7,7,7,8,9,9,99,0,]
let repetitionCount = {}

let stringOfNumbers = arrayOfNumbers.join(',')
for (let i = 0; i < arrayOfNumbers.length; i++) {
    repetitionCount[arrayOfNumbers[i]] = stringOfNumbers.split(arrayOfNumbers[i]).length-1
}

console.log(`Result: ${JSON.stringify(repetitionCount)}`)