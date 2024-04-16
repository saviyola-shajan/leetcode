// An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.


var sumOfTheDigitsOfHarshadNumber = function (x) {
    let xs = x.toString().split('').map(Number)
    let sum = xs.reduce((acc, curr) => acc + curr, 0)
    if (x % sum === 0) {
        return sum
    } else {
        return -1
    }
};