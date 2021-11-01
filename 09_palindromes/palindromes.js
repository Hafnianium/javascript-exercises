const palindromes = function (possiblePalindrome) {
  let punctuationRemoved = possiblePalindrome.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  let finalString = punctuationRemoved.replace(/\s{2,}/g," ");
  let spacesRemoved = finalString.replace(/\s/g, '');
  let normalArray = spacesRemoved.toLowerCase().split('');
  let reverseArray = [...normalArray]
  reverseArray.reverse()
  let normalString = normalArray.join()
  let reverseString = reverseArray.join()
  if (normalString == reverseString) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
