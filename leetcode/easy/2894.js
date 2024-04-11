// You are given positive integers n and m.

// Define two integers, num1 and num2, as follows:

// num1: The sum of all integers in the range [1, n] that are not divisible by m.
// num2: The sum of all integers in the range [1, n] that are divisible by m.
// Return the integer num1 - num2.

var differenceOfSums = function (n, m) {
    let num1 = 0
    let num2 = 0
    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {
            num2 += i
        } else {
            num1 += i
        }
    }
    return num1 - num2
};