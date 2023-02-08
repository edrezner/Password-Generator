// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    // found info for alert, prompt and confirm message boxes here: https://www.tutorialsteacher.com/javascript/display-popup-message-in-javascript#:~:text=alert(message)%3A%20Display%20a,the%20OK%20and%20Cancel%20buttons.
    alert("The upcoming prompts will set a password length and then the password criteria you wish to use.");
    
    var passwordLength = 
    prompt()
}
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
