function isPangram(string){
  const containsLetters = string.match(/([a-zA-Z])(?!.*\1)/gi); 
  return containsLetters.length === 26;
  
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram("This is not a pangram.")) // false
