// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).


var areOccurrencesEqual = function(s) {
    let obj={}
    for(const a of s){
    if(obj[a]) obj[a]++
    else{
        obj[a]=1
    }
    }
    const set = new Set(Object.values(obj))
    return set.size==1;
};