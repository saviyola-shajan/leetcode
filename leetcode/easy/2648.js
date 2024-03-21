// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.


var fibGenerator = function* () {
    var x = 0
    var y = 1
    while (true) {
        yield x;
        var z = x + y
        x = y
        y = z
    }
};