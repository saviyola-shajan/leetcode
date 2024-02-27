// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

var findClosestNumber = function(nums) {
    let closest=nums[0]
    for(let i=0;i<nums.length;i++){
        if(Math.abs(nums[i])<Math.abs(closest)){
          closest=nums[i]
        }else if(Math.abs(nums[i]===Math.abs(closest)&&nums[i]>closest)){
            closest=nums[i]
        }
    }
    return closest
};