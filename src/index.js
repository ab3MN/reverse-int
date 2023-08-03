module.exports = function reverse(n) {
    return n < 0
        ? +(n * -1 + "").split("").reverse().join("")
        : +(n + "").split("").reverse().join("");
};
