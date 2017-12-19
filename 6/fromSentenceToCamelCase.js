function toCamelCase(s, n) {
  let arr = s.toLowerCase().split(' ');

  let camelCase = {
    1: function () {
      arr = arr.map((element, index) => {
        if (index !== 0) {
          element = element.split('');
          element[0] = element[0].toUpperCase();
          return element.join('');
        } else {
          return element;
        }
      });
      return arr.join('');
    },
    2: function () {
      arr = arr.map((element, index) => {
        if (index !== arr.length - 1) {
          element = element.split('');
          element[element.length - 1] = element[element.length - 1].toUpperCase();
          return element.join('');
        } else {
          return element;
        }
      });
      return arr.join('');
    },
    3: function () {
      arr = arr.map((element, index) => {
        if (index !== 0 && index !== arr.length - 1) {
          element = element.split('');
          element[0] = element[0].toUpperCase();
          element[element.length - 1] = element[element.length - 1].toUpperCase();
          return element.join('');
        } else if (index === 0) {
          element = element.split('');
          element[element.length - 1] = element[element.length - 1].toUpperCase();
          return element.join('');
        } else {
          element = element.split('');
          element[0] = element[0].toUpperCase();
          return element.join('');
        }
      });
      return arr.join('');
    }
  }
  return camelCase[n]();
}
console.log(toCamelCase("hello world", 2)); //hellOworld
console.log(toCamelCase("hello world",1)); //helloWorld
console.log(toCamelCase("Each number plus one",1)); //eachNumberPlusOne
console.log(toCamelCase("Each number plus one",3)); //eacHNumbeRPluSOne