const repeatString = function(x, y) {
let repeatedString = x
  for (i = 0; i < y -1; i++) {
    repeatedString = repeatedString.concat(x);
}
return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
