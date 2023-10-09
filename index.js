function isPalindrome(word) {
  // Write your algorithm here
function reverse(word){

  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
*/
function isPalindrome(word) {
  const reversedWord = reverse(word);

/*
  Add written explanation of your solution here
  return word === reversedWord
}
/* 
  this means that if the word is the same as the word in reverse, 
  it should return True after reversing the string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("machine"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("m"));
}

module.exports = isPalindrome;