const palindromes = function (str) {
    // remove spaces, punctuations and turn all lower case
    const splitString = str.toUpperCase().split('');

    const filteredString = splitString.filter(
        (char) => {
            return char != ' ' && char != ',' && char != '.' && char != '!' && char != '-';
        }
    );

    // check for palindromes in filteredString: Array
    for (let i = 0, j = filteredString.length - 1; i <= Math.floor(filteredString.length / 2) && j >= Math.floor(filteredString.length / 2); i++, j--) {
        if (filteredString[i] !== filteredString[j]) {
            return false;
        }
    }
    return true;
    // const filteredStringReversed = [...filteredString].reverse();
    // console.log(filteredString)
    // console.log(filteredStringReversed)
    // return filteredString == filteredStringReversed;

};

console.log(palindromes('racecar!'));

// Do not edit below this line
module.exports = palindromes;
