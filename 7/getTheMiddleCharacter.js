function getMiddle(s) {
  const stringLength = s.length;
  if (stringLength % 2 !== 0) {
    return s[Math.round(stringLength / 2) - 1];
  } else {
    return `${s[stringLength/2-1]}${s[stringLength/2]}`;
  }
}
console.log(getMiddle("middle")); //dd
console.log(getMiddle("test")); //es
console.log(getMiddle("testing")); //t