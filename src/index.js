module.exports = function reverse (n) {
    let originalNumber = String(Math.abs(n));
    let stringFromNumber = originalNumber.split('');
   const reversed = stringFromNumber.reverse();
   let invertedString = reversed.join('');
   let result = Number(invertedString);
   return result
}
