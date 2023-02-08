// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    // found info for alert, prompt and confirm message boxes here: https://www.tutorialsteacher.com/javascript/display-popup-message-in-javascript#:~:text=alert(message)%3A%20Display%20a,the%20OK%20and%20Cancel%20buttons.
    alert("The upcoming prompts will set a password length and then the password criteria you wish to use.");
    
    var pwLength = prompt("Choose the length of your password. Your password must be 8 to 128 characters.");

    // mdn web doc page on while loops https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement
    /* Tried using a while loop, but function was not progressing forward after resolving 
    true return from pwLength < 8 || pwLength > 128. the if conditional seems to have resolved that. */
    
    while (pwLength < 8 || pwLength > 128) {
      pwLength = prompt("Please choose a password length from 8 to 128 characters.");
    }

    alert("Your password must contain at least one of the 4 following criteria:");

    var pwLower = confirm("Would you like your password to include lowercase letters?");
    var pwUpper = confirm("Would you like your password to include upper case letters?");
    var pwNumber = confirm("Would you like your password to inlcude numbers?");    
    var pwSpecial = confirm("Would you like your password to inlcude special characters?");

    var pwCharacters = "";

    // do I need an array that catalogues all individual characters or one long string?
    if (pwLower) {
      pwCharacters += "abcdefghijklomnopqrstuvwxyz";
    }

    if (pwUpper) { 
      pwCharacters += "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
    }

    if (pwNumber) {
      pwCharacters += "0123456789";
    }

    // I reviewed this lesson at freecodecamp to insert quotes within a string https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings
    if (pwSpecial) {
      pwCharacters += "!\"#$%&\'()*+,-/:;<=>?@[\\]^_`{|}~";
    }

    // Looked up how to generate random strings at stackoverflow https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    // Also looked up a similar method at this site https://www.programiz.com/javascript/examples/generate-random-strings
    var pwConstructed = "";

    for (var i = 0; i < pwLength; i++) {
      pwConstructed += pwCharacters.charAt(Math.floor(Math.random() * pwCharacters.length));
    }

    return pwConstructed;
  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
