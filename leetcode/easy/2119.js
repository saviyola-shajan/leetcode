// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.


var isSameAfterReversals = function (num) {
    let revs1 = reversed(num)
    let revs2 = reversed(revs1)
    return revs2 === num
};
function reversed(num) {
    let reversedd = num.toString().split('').reverse().join('')
    return parseInt(reversedd)

}