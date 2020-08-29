// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  alert ("Hi, welcome to the Password Generator!");

  var NumberOfCharacters = prompt ("Please choose the number of characters between 8 and 128 for your password.");

  if (NumberOfCharacters > 7 && NumberOfCharacters < 129) {
     alert ("Your password would have " + NumberOfCharacters + " characters.");

     var lowerCase = confirm ("Do you want lowercase letters in your password?");
     var upperCase = confirm  ("Do you want uppercase letters in your password?");
     var numericLetters = confirm  ("Do you want numerics in your password?");
     var specialLetters = confirm  ("Do you want special letters in your password?");

     var passwordString = "";
   
    if (lowerCase == false && upperCase == false && numericLetters == false && specialLetters == false){
        alert ("Please select at least one type of character. Please start again.");
    } 
    
    // if (lowerCase == true) {
    //   passwordString = passwordString.concat(lowerCasedCharacters);
    // };
    
    // if (upperCase == true){
    //   passwordString = passwordString.concat(upperCasedCharacters);
    // };

    // if(numericLetters == true) {
    //   passwordString = passwordString.concat(numericCharacters);
    // };

    // if(specialLetters == true) {
    //   passwordString = passwordString.concat(specialCharacters);
    // };

    // console.log(passwordString);

   for (var i = 0 ; i < NumberOfCharacters; i++) {

        if (lowerCase && passwordString.length < NumberOfCharacters) {
            passwordString = passwordString += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
        }
  
        if (upperCase && passwordString.length < NumberOfCharacters) {
           passwordString = passwordString += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
        }

        if (numericLetters && passwordString.length < NumberOfCharacters) {
          passwordString = passwordString += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
        }

        if (specialLetters && passwordString.length < NumberOfCharacters) {
           passwordString = passwordString += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        } 
    
      };

       var password = passwordString.split('').sort(function(

       ) {return 0.5-Math.random()}).join('');
      
       console.log(password);

       document.getElementById("password").innerHTML = password;
   }
   else {
    alert('Your password should be between 8 and 128 characters.');
  }



// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Arrays

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters 
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];