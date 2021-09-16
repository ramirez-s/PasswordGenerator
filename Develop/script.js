// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  alert("Please follow the prompts to generate a secure password.")
  var lengthOf = prompt("Choose how long you want to your password, a min of 8 required.")
  var lowerCase = confirm("Would you like to include at least one lower case letter?")
  var upperCase = confirm("Would you like to include at least one upper case letter?")
  var numbers = confirm("Would you like to include at least one number?")
  var symbols = confirm("Would you like to include at least one special character?")

  if (lengthOf < "8") {
    alert("Invalid entry, please select at least a minimum of 8 characters.");
    return;
  }
  
  var passpword = generatePassword()
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) +48);
    }
  
    function getRandomSymbol() {
    return symbols(Math.floor(Math.random) * symbols.lenghth)
    }
      
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(getRandomNumber)