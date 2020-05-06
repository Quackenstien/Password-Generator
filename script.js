// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
​
// Array of numeric characters to be included in password
var numericCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
​
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
​
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

passwordText.value = password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    //Prompt pass
    var length = prompt("How long would you like your password o be?");
    length = parseInt(length);

    //Checking to see if number is valid
    if (isNaN(length)) {
      alert("That is not a valid number, please try again");
      return;
    }
    //Min pass length is assigned number (8)
    if (length < 8) {
      alert("Your password is to short.");
      return;
    }
    //Max pass length is assigned number (128)
    if (length > 128) {
      alert("Your password is to long");
      return;
    }
  }
  //Confirm character prompts
  var specialChars = confirm(
    "Click okay to confirm including special characters"
  );
  var numericChars = confirm(
    "Click okay to confirm including special characters"
  );
  var lowercaseChars = confirm(
    "Click okay to confirm including special characters"
  );
  var uppercaseChars = confirm(
    "Click okay to confirm including special characters"
  );

  //If none selected alert
  if (!specialChars && !numericChars && !lowercaseChars && !uppercaseChars) {
    alert("You have to pick one.");
    return;
  }

  console.log(typeof length);
  console.log(length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

