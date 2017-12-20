function XO(str) {
  var filterForO = str.match(/[oO]/g);
  var filterForX = str.match(/[xX]/g);


  if (filterForX === null && filterForO === null) {
    return true;
  } else if (filterForX === null || filterForO === null) {
    return false;
  } else if (filterForX.length === filterForO.length) {
    return true;
  } else {
    return false;
  }
}

console.log(XO('xo')); //true
console.log(XO('xxOo')); //true
console.log(XO('xxxm')); //false
console.log(XO('Oo')); //false