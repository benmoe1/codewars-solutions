function squareDigits(num) {
  num = parseInt(num.toString()
    .split('')
    .map((element) => {
      element = parseInt(element) * parseInt(element);
      return element;
    })
    .join(''));
  return num;
}
console.log(squareDigits(234)); //4916
console.log(squareDigits(9119)); //811181