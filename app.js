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
// console.log(calculateCube(5));

//3. isAVowel
function isAVowel(letter) {
    //Create an array of vowels
   let vowels=["a", "e", "i", "o", "u"];
   //create loop to cycle through the vowels in the array
    for (let i = 0; i < vowels.length; i++) {
    //Convert input to lowercase for consistency
    letter=letter.toLowerCase();
    //If letter matches any of the indexes = true. If not = false
    if (letter==vowels[i]) {
        return "true";
    } else {
    }
}
//this return statement goes outside of the loop so that the loop can continue to execute until it's exhausted all of the vowel options.
return "false";
}

//console.log(isAVowel("O"))


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let length1=word1.length;
    let length2=word2.length;
    let wordString= length1 + "," + length2
    let array=wordString.split(",")
    return array;
}
//console.log(getTwoLengths("house", "pet"))

// 5. sumArray
function sumArray(arr) {

    let sum = 0;
    //looping over the values of the array
    for(i=0; i<arr.length;i++) {
        sum+=arr[i];
    }
    // for (const val of arr) {
    //     //add zero to the first value in the array, and then add that to the next value, and so forth.
    //     sum += val;
    // }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    if (num<=2) {
        return "false";
    }
    let root = Math.sqrt(num);
    for (let i = 2; i <= root; i++) {
        if (num % i === 0) {
        return "false";
    } else {
        return "true";
    }
}
}
//console.log(checkPrime(22));
//This works for every number except 3. Why??

// 6.2 printPrimes

function printPrimes(num) {
   for (let i = 0; i <= num; i++) {
    let flag = 0;
        for(let j=2; j<+i; j++) {
            if (i %j == 0){
                flag=1;
                break;
            }
        }
    if (i > 1 && flag ==0) {
        return i;
    }
    }
   }

//console.log(printPrimes(97));

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