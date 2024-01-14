// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.


var duplicateZeros = function(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            arr.splice(i,0,0);
            arr.pop()
            i++
        }
    }
    };