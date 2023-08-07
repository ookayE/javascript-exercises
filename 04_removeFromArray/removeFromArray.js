const removeFromArray = function(array, ...removeThese) {
    return array.filter (item => !removeThese.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
