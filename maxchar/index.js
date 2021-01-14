// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  chars = {};

  for (let characters of str) {
    chars[characters] = chars[characters] + 1 || 1;
  }
  console.log(chars);
}

module.exports = maxChar;
