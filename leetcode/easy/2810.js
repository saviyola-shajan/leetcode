// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

// You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

// Return the final string that will be present on your laptop screen.


var finalString = function (s) {
    let res = []
    for (let e of s) {
        if (e === 'i') {
            res.reverse()
        } else {
            res.push(e)
        }
    }
    return res.join('')
};