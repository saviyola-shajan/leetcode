// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        let firstIndex = s.indexOf(s[i])
        let lastIndex = s.lastIndexOf(s[i])
        if (firstIndex === lastIndex) {
            return i
        }
    }
    return -1
}