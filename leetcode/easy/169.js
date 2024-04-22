// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
    let count = 0
    let result
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            result = nums[i]
            count = 1
        } else if (result === nums[i]) {
            count++
        } else {
            count--
        }
    }
    return result
};