const sumAll = function(firstnum, secondNum) {
    if (typeof firstnum !== "number" || typeof secondNum !== "number") {
        return "ERROR"
    }

    if (firstnum < 0 || secondNum < 0) {
        return "ERROR";
    }

    let start = Math.min (firstnum, secondNum)
    let end = Math.max (firstnum, secondNum)
    let total = 0

    for (let i=start; i<=end; i++) {
        total+= i
    }

    return total
}

// Do not edit below this line
module.exports = sumAll;
