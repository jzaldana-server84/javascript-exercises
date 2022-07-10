let log = console.log;

const add = function() {
	return arguments[0] + arguments[1];
};


const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(numbers) {
    //if (numbers.lengh == 0) {return 0;}
    //else {
    const result = numbers.reduce((a,b) => a + b, 0);
    return result;
    //}
};

//sum();

const multiply = function(numbers) {
	const result = numbers.reduce((a,b) => a * b);
  return result;
};

const power = function() {
	return Math.pow(arguments[0],arguments[1]);
};

const factorial = function(fact) {
  let result = fact;
  var i = fact-1;
  
  if (fact == 0) {return 1;}
  
  else {
    
    while (i>0) {
      result = result*(i); 
      i = i - 1;
    }
    return result;
  }
  
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
