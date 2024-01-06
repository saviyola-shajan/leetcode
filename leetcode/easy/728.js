// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

function selfdividing(num){
    const digits=num.toString().split('')
    if(digits.includes('0')){
        return false
    }
    return digits.every(digit=>num % parseInt(digit)===0)
    }
    var selfDividingNumbers = function(left, right) {
        const result = []
        for(let i=left;i<=right;i++){
            if(selfdividing(i)){
                result.push(i)
            }
        }
        return result;
    };