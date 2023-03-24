function isPalindrome(word) {
 if (word === word.split("").reverse().join("")){
  return true
 } else return false
}

/* 
 Pass any word in the arguement

 if() statement to initialize logic
  if word is a palindrome:
    return true

 else statement for anything against intial logic
  return false 
*/

/*
 Pass any word in the arguement

 If the word equals to its reverse self, return "true"
  
 Else return "false"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
