const fibonacci = function(num) {
    if(typeof num !== 'number') {num = parseInt(num)} //Check if is string. If true then convert to interger

    if (num < 0) {return 'OOPS'} //Return OOPS if the number is negative
    else {
        let fiboChain = [];

        for (var i = 0; i < num; i++){
            if (i == 0 || i == 1) {fiboChain.push(1);}
            else {
                fiboChain.push(fiboChain[i-2] + fiboChain[i-1]); //Creates the fibonacci 
            }  
        }

        return fiboChain[num-1]; //Return fibonacci chain position passed to the function
    }
    
};


// Do not edit below this line
module.exports = fibonacci;
