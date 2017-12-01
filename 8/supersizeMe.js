'use strict';
function superSize(num) {
  num = num.toString().split('');

 const numNew = num.map((element) => parseInt(element));

 return parseInt(numNew.sort((a, b) => b - a).join(''));
}
superSize(45); // 54
