// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

var arraySign = function(nums) {
    let ans = 1
    for(let element of nums){
      if(element===0){
          return 0
      }
      if(element<0){
          ans=-1*ans
      }
    }
    return ans
};