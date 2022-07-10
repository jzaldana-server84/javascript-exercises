const palindromes = function (normalText) {
    const regex = /[a-z]/gi; //Selecting just letters
    normalText = normalText.match(regex).join("").toLowerCase(); // creating a new array with just the letters

    const reversedText = normalText.split("").reverse().join("");
    return reversedText == normalText;
    //return normalText;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
