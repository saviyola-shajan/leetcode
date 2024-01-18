// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
    let ans=[1,2]
    for(let i=2;i<=n;i++){
        ans[i]=ans[i-1]+ans[i-2]
    }
    return ans[n-1]
  };