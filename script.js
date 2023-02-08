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
    while (pwLength < 8 || pwLength > 128) {
      prompt("Please choose a password length from 8 to 128 characters.");
    }

    alert("Your password must contain at least one of the 4 following criteria:")
    
    var pwLower = confirm("Would you like your password to include lowercase letters?");
    var pwUpper = confirm("Would you like your password to include upper case letters?");
    var pwNumber = confirm("Would you like your password to inlcude numbers?")    
    var pwSpecial = confirm("Would you like your password to inlcude special characters?");


  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
