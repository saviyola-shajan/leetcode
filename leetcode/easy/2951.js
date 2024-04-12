// You are given a 0-indexed array mountain. Your task is to find all the peaks in the mountain array.

// Return an array that consists of indices of peaks in the given array in any order.

// Notes:

// A peak is defined as an element that is strictly greater than its neighboring elements.
// The first and last elements of the array are not a peak.


var findPeaks = function(mountain) {
    let peaks=[]
    for(let i=0;i<mountain.length-1;i++){
        if(mountain[i]>mountain[i-1]&&mountain[i]>mountain[i+1]){
            peaks.push(i)
        }
    }
    return peaks
};