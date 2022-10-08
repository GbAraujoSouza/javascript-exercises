const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0)
    {
        return 'OOPS';
    }
    else if (n < 2)
    {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
