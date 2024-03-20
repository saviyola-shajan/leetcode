// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

var maximumCount = function (nums) {
    let max = 0
    let min = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            max++
        } else if (nums[i] < 0) {
            min++
        }
    }
    return (max > min) ? max : min
};