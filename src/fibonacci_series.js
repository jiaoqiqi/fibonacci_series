'use strict';

function fibonacci_series(n) {

    var fibonacciNumers = [];

    fibonacciNumers[0] = 0;
    fibonacciNumers[1] = 0;

    if (n === 0) {
        return fibonacciNumers[0];
    }

    for (var i = 2; ; i++) {
        if (i > n) {
            return fibonacciNumers;
        }

        fibonacciNumers[i] = fibonacciNumers[i - 1] + fibonacciNumers[i - 2];
    }

}

module.exports = fibonacci_series;