// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

var toHex = function (num) {
    const Hex = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "a",
        11: "b",
        12: "c",
        13: "d",
        14: "e",
        15: "f",
    };
    let res = ""
    if (num === 0) return Hex[0]
    if (num < 0) {
        num += 2 ** 32
    }
    while (num > 0) {
        let elem = Math.floor(num % 16)
        res = Hex[elem].toString() + res
        num = Math.floor(num / 16)
    }
    return res
};