// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

var scoreOfString = function (s) {
    var sum = 0
    for (let i = 1; i < s.length; i++) {
        sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1))
    }
    return sum
};