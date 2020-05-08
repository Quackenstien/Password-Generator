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

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    //Prompt pass
    var length = prompt("How long would you like your password to be (8-128)?");
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
    //Confirm character prompts
    var specialChars = confirm(
      "Click okay to confirm including special characters"
    );
    var numericChars = confirm(
      "Click okay to confirm including numeric characters"
    );
    var lowercaseChars = confirm(
      "Click okay to confirm including lowercase characters"
    );
    var uppercaseChars = confirm(
      "Click okay to confirm including uppercase characters"
    );

    //If none selected alert
    if (!specialChars && !numericChars && !lowercaseChars && !uppercaseChars) {
      alert("You have to pick one.");
      return;
    }

    //var of an empty string to be filled later
    var password = "";

    //using a loop to gen a random index from our init arrays if character choice is true
    for (let index = 0; index < length; index++) {
      if (specialChars) {
        password += getRandomValue(specialCharacters);
      }
      if (numericChars) {
        password += getRandomValue(numericCharacters);
      }
      if (lowercaseChars) {
        password += getRandomValue(lowerCasedCharacters);
      }
      if (uppercaseChars) {
        password += getRandomValue(upperCasedCharacters);
      }
    }

    //Returns value of password and slices it by
    return password.slice(0, length);

    //generating a random item from any given array
    function getRandomValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    // var randomNumbers =
    //   numericCharacters[Math.floor(Math.random() * numericCharacters.length)];

    // var randomSpecial =
    //   specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    // var randomLower =
    //   lowerCasedCharacters[
    //     Math.floor(Math.random() * lowerCasedCharacters.length)
    //   ];

    // var randomUpper =
    //   upperCasedCharacters[
    //     Math.floor(Math.random() * upperCasedCharacters.length)
    //   ];

    // console.log(typeof length);
    // console.log(length);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
