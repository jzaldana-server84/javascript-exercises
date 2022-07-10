const sumAll = function() {
    const minValue = Math.min(...arguments);
    const maxValue = Math.max(...arguments);

    if (maxValue < 0 || minValue < 0 || typeof arguments[0] != 'number' || typeof arguments[1] != 'number') 
    {return 'ERROR'}
    else {
        let value = minValue;
        
        let sum = 0;

        while (value <= maxValue) {
            sum += value;
            value++;
        }

        return sum;
    }
};

//sumAll(123,1);

// Do not edit below this line
module.exports = sumAll;
