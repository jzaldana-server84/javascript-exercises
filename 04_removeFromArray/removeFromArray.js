
//let arrayReceived = [1,2,3,"hey"];

const removeFromArray = function(arrayReceived) {
    let filterArray = [];
    for (var i = 1; i <= arguments.length; i++){
        filterArray.push(arguments[i]);
    }

    //const newArray = arrayReceived.filter((item) => item !== arguments[1]);

    const newArray =  arrayReceived.filter((item) => {
            return filterArray.indexOf(item) === -1;
        }
    );

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
//console.log(removeFromArray(arrayReceived,2,"hey"));

