function capitalize(string) {
  let first = string.charAt(0);
  string = string.slice(1,string.length);
  first = first.toUpperCase();
  string = first + string;
  
  return string;
}

module.exports = capitalize;