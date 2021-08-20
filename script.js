// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Stored Upper Case Letters, Lower Case Letters, Numbers, and Special Characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters =  "\"\'!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var chosenCharacters = "";

// Alerts user to choose how many characters they would like in the password
function generatePassword(){
  var result = "";
  var length = prompt("How many characters would you like in your password? (8-128)");
// This displays an alert if the user does not input any number.
  if(isNaN(length)){
    alert("Please input a number.");
    return generatePassword()
  }
// This displays an alert if user does not choose a number between 8 and 128.
  if(length<8 || length> 128){
    alert("Please input a number between 8 and 128.");
    return generatePassword()
  }

// Alerts user to choose other characters to include in the password
  var hasUpperCase = confirm("Would you like to include upper case letters? Okay/Yes Cancel/No");
  var hasLowerCase = confirm("Would you like to include lower case letters? Okay/Yes Cancel/No");
  var hasNumbers = confirm("Would you like to include numbers? Okay/Yes Cancel/No");
  var hasSpecialChracters = confirm("Would you like to include special characters? Okay/Yes Cancel/No");

// This dispalys an alert if the user does not choose any character types
  if(!hasUpperCase&&!hasLowerCase&&!hasNumbers&&!hasSpecialCharacters){
    alert("Please choose at least 1 character type.");
    return generatePassword()
  }

// This combines the chosen characters and randomizes them into a string
  if(hasUpperCase){
    chosenCharacters += upperCase
  }
  if(hasLowerCase){
    chosenCharacters += lowerCase
  }

  if(hasNumbers) {
    chosenCharacters += numbers
  }

  if(hasSpecialChracters) {
    chosenCharacters += specialCharacters
  }

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;
}