// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.


var countDigits = function (num) {
    let count = 0
    for (let i = 0; i < String(num).length; i++) {
        if (num % Number(String(num)[i]) === 0) count++
    }
    return count
};