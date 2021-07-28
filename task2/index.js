function reverseString(string) {
  let reversedString = "";
  for (var i = string.length; i > 0; i--) {
    reversedString = reversedString.concat(string.charAt(i-1));
  }
  return reversedString;
}

module.exports = reverseString;