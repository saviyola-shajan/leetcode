// Given an array of strings words and a character separator, split each string in words by separator.

// Return an array of strings containing the new strings formed after the splits, excluding empty strings.

// Notes

// separator is used to determine where the split should occur, but it is not included as part of the resulting strings.
// A split may result in more than two strings.
// The resulting strings must maintain the same order as they were initially given.



var splitWordsBySeparator = function (words, separator) {
    let res = []
    for (let i = 0; i < words.length; i++) {
        const splitted = words[i].split(separator)
        const filtered = splitted.filter(item => item.length > 0)
        res.push(...filtered)
    }
    return res
};