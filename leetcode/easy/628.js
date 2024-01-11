// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

var maximumProduct = function(nums) {
    nums.sort((a,b)=>b-a);
    const product = nums[0]*nums[1]*nums[2]
    const product1=nums[0]*nums[nums.length-1]*nums[nums.length-2]
    return Math.max(product,product1);
};