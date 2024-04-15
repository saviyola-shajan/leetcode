
// You are given a 0-indexed integer array nums, and an integer k.

// In one operation, you can remove one occurrence of the smallest element of nums.

// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.


var minOperations = function (nums, k) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) {
            count++
        }
    }
    return count
};