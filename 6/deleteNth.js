/*
* Returns an array with n occurrences of each element
* @param {array} arr Array of integers
* @param {number} n Integer, which specifies the allowed occurrences of each element
* @return {array} cleanedArr with n occurrences of each element
*/
function deleteNth(arr, n) {
  let hashTable = {};
  let cleanedArr = [];

  arr.forEach((element) => {
    const elementToString = element.toString();
    if (Object.prototype.hasOwnProperty.call(hashTable, elementToString)) {
      if (hashTable[elementToString] + 1 > n) {
      } else {
        hashTable[elementToString] += 1;
        cleanedArr.push(element);
      }
    } else {
      hashTable[elementToString] = 1;
      cleanedArr.push(element);
    }
  });
  return cleanedArr;
}
console.log(deleteNth([1,1,1,2,3,4], 2)); // [1, 1, 2, 3, 4]
console.log(deleteNth([1,1,1,2,2,3, 4, 5,2, 3,4], 2)); // [1, 1, 2, 2, 3, 4, 5, 2, 4]