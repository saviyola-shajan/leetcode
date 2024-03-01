// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.


var checkIfPangram = function(sentence) {
    let letterSet=new Set()
    for(let char of sentence){
        if(/[a-z]/.test(char)){
            letterSet.add(char)
        }
    }
    return letterSet.size===26
};