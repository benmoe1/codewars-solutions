var nbrOfLaps = function (x, y) {

  let i = 1;
  while (true) {
    if (x * i % y == 0) {
      y = x * i / y;
      return [i, y];
    }
    i += 1;
  }

}
console.log(nbrOfLaps(5, 3)); // [3, 5]
console.log(nbrOfLaps(4, 6)); //  [3, 2]