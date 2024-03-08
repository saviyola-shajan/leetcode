// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

var commonFactors = function (a, b) {
    let count = 0
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            count++
        }
    }
    return count
};