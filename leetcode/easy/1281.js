// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
    n=n.toString()
    let product=1
    let sum=0
    for(let i=0;i<n.length;i++){
        product*=parseInt(n[i])
        sum+=parseInt(n[i])
    }
    return product-sum
}