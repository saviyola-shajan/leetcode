// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
    let leftIndex=0
    let rightIndex=nums.length-1
  while(leftIndex<=rightIndex){
      let middleIndex=Math.floor((leftIndex+rightIndex)/2)
      if(target===nums[middleIndex]){
          return middleIndex
      }
      if(target<nums[middleIndex]){
          rightIndex=middleIndex-1
      }else{
          leftIndex=middleIndex+1
      }
}
return -1
};