function Palindrome(str){
    
    //using two pointers technique by initializing one from the start of string and second to the end of string
    let left = 0;
    let right = str.length - 1;

    //looping through the string to check if the string is palindrome or not
    while (left <= right) {
      if (str[left] === str[right]) {
        left++;
        right--;
      } else {
        //if the string is not palindrome then we will reverse the string and return it
        const reversedString = str.split('').reverse().join('');
        return reversedString;
      }
    }
    //if the string is palindrome then we will return the string
    return str;
}

function checkPalindrome() {
  const input = document.getElementById("palindromeInput").value;
  const output = document.getElementById("palindromeOutput");

  const result = Palindrome(input); //calling the above function here

  output.classList.remove("success", "error");
  output.innerHTML = `The input string ${result === input ? "is" : "is not"} a palindrome. ${
    result !== input ? `Reversed string: ${result}` : ""
  }`;
  if (result === input) {
    output.classList.add("success");
  } else {
    output.classList.add("error");
  }
}