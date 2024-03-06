// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

var findFinalValue = function (nums, original) {
    let found
    do {
        found = false
        for (let i = 0; i < nums.length; i++) {
            if (original === nums[i]) {
                original = 2 * original
                found = true
                break;
            }
        }
    } while (found)
    return original
};