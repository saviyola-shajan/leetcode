// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function (nums) {
    let count = 0
    for (const num of nums) {
        let numm = num.toString()
        if (numm.length % 2 === 0) {
            count++
        }
    }
    return count
};