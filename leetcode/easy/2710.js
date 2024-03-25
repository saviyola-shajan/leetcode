// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

var removeTrailingZeros = function (num) {
    const res = num.split('')
    while (res[res.length - 1] == '0') {
        res.pop()
    }
    return res.join('')
};