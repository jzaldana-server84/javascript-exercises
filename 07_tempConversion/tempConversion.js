const ftoc = function(temp) {
  let cel = (temp - 32) / (9/5);
  cel = Math.round(cel * 10) / 10;
  return cel;
};

const ctof = function(temp) {
  let fah = (temp * (9/5)) + 32;
  fah = Math.round(fah * 10) / 10;
  return fah;
};

//console.log(ftoc(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
