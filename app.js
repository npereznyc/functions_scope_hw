// 1.1. What is the difference between a parameter and an argument?
//The parameter is the name listed in the function's definition. The argument is the actual value that gets passed into the function.
// 1.2. Within a function, what is the difference between return and console.log?
//Return stores the output/value for future use. Console.log prints the output/value and then it goes away so it cannot be used later in the code. Console.log is meant for checking our code, whereas return is meant for using our code.
// 1. 3. What are the implications of the ability of a function to return a value?
//It means that we are able to generate and store new values that can be used later on in the code, or that can be given back to the user.

// 2. calculateCube
function calculateCube(num) {
    let volume=(num**3);
    //let volume=Math.pow(num,3); will also work
    return volume;
}
//console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    //Create an array of vowels
   let vowels=["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
   //let vowels=["a", "e", "i", "o", "u"];
   //create loop to cycle through the vowels in the array
   for (let i = 0; i < vowels.length; i++) {
    //If letter matches any of the indexes = true. If not = false
        if (letter == vowels[i]) {
        //if (letter == vowels.indexOf[i]) {
        console.log("true");
    } else {
        console.log("false");
    }
   }
}
isAVowel("A")

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };