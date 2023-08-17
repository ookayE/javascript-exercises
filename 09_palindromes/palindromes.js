const palindromes = function(string) {
    const formatString = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    return formatString.split('').reverse().join('') == formatString
}

palindromes("making s%$ure this join^%$t here w&*^orks, cuh")


// Do not edit below this line
module.exports = palindromes;
