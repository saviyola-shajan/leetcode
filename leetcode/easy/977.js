// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


var sortedSquares = function (nums) {
    let res = nums.map((num) => {
        return num * num
    })
    return res.sort((a, b) => a - b)
};