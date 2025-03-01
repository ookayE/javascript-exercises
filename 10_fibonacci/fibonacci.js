// const fibonacci = function(input) {
//     const n = parseInt(input, 10); // Convert the input string to a number
//     const sequence = [0, 1]
    
//     if (isNaN(n) || n < 0) {
//         return "OOPS"
//     }

//     for (let i = 1; i<= n; i++) {
//         const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length-2]
//         sequence.push(nextNumber)
//     }
//     return sequence[sequence.length-2]
//   }


const fibonacci = function(input) {
    const n = parseInt(input, 10)
    const fibonacciSequence = [0, 1]

    if (isNaN(n) || n < 0)  {
        return "OOPS"
    }

    for (let i = 1; i < n; i++) {
        const nextNumber = fibonacciSequence[fibonacciSequence.length-1] + fibonacciSequence[fibonacciSequence.length-2]
        fibonacciSequence.push(nextNumber)
    }

    return fibonacciSequence[fibonacciSequence.length-2]
}


// Do not edit below this line
module.exports = fibonacci;
