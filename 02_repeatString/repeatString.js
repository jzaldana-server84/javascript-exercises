
//let lineText = 'hey';
//let numberOfTimes = 3;

const repeatString = function(lineText, numberOfTimes) {
    if (numberOfTimes < 0) {return 'ERROR';}
    else {
        let getStrings = [];

        for (var i = 0; i < numberOfTimes; i++) {
            getStrings.push(lineText);
            //console.log(lineText);
        }
        return getStrings.join("");
    }
};

// Do not edit below this line
module.exports = repeatString;
//console.log(repeatString(lineText, numberOfTimes));
