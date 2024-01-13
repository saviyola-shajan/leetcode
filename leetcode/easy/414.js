// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

var thirdMax = function(nums) {
    number=[...new Set(nums)]
   let n= number.sort((a,b)=>b-a)
   for(let i=0;i<n.length;i++){
       if(n.length===2 ||n.length===1){
           return n[0]
       }
       if(n.length>=3){
           return n[2]
       }
   }
};