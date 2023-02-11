// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    
    alert("The upcoming prompts will set a password length and then the password criteria you wish to use.");
    
    // This grabs the desired number of characters and stores it in a variable.
    var pwLength = prompt("Choose the length of your password [please use numeric characters]. Your password must be 8 to 128 characters.");
       
    // This while loop ensures that only a password length with a numerical value of less than 128 or greater than 8 is selected.
    while (pwLength < 8 || pwLength > 128) {
      pwLength = prompt("Choose a password length from 8 to 128 characters using numeric characters.");
    } 

    alert("Your password must contain at least one of the 4 following criteria:");

    //These variables are going to store 'true' or 'false' values from the confirm boxes.
    var pwLower = confirm("Would you like your password to include lowercase letters?");
    var pwUpper = confirm("Would you like your password to include upper case letters?");
    var pwNumber = confirm("Would you like your password to inlcude numbers?");    
    var pwSpecial = confirm("Would you like your password to inlcude special characters?");

    // This empty string is stored as a variable which will eventually hold our final character set.
    var pwCharacters = "";

    /* The following conditional statements check the truth values of their parameters. If true 
    (from clicking 'OK' on their matching confirm boxes) then the appropriate character set is 
    concatenated with the pwCharacters variable */
    if (pwLower) {
      pwCharacters += "abcdefghijklomnopqrstuvwxyz";
    }

    if (pwUpper) { 
      pwCharacters += "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
    }

    if (pwNumber) {
      pwCharacters += "0123456789";
    }

    // I used a back slash to be able to include quotes and back slash in this string.
    if (pwSpecial) {
      pwCharacters += "!\"#$%&\'()*+,-/:;<=>?@[\\]^_`{|}~";
    }

    /* This conditional ensures that at least one character set for pw generation was selected
    and returns to the top of the function if not */
    if (pwCharacters === "") {
      alert("You must select at least one set of characters.");
      return generatePassword();
    }

    var pwConstructed = "";

    /* This loop was something I grabbed through some googling; cited in the credits of the README file.
    After talking with my TA Enrique and reading about all the individual parts within the body of the loop I've learned a fair amount of new
    info. Math.random creates a random decimal between 0 and 1, Math.floor rounds down a decimal to the nearest 
    whole integer, and the charAt function grabs a character in a string at a specified index based on the argument in the function.
    
    Putting this all together; a random value between 0 and 1 is multiplied by the length of our character set variable;
    that decimal number is then rounded down to a whole integer; that integer determines the index from our character set 
    variable that contains all the user requested possible characters; and finally the character at that index is added to a final
    variable that will house the fully constructed password, which is done by iterating this process in a loop over the length
    of our password length variable. */
    for (var i = 0; i < pwLength; i++) {
      pwConstructed += pwCharacters.charAt(Math.floor(Math.random() * pwCharacters.length));
    }

    return pwConstructed;
  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// readme: Random PW Generatom img, Decription, Usage, Credit 