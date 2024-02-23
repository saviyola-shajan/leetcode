// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

var repeatedCharacter = function (s) {
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j]) {
                return s[i]
            }
        }
    }
};