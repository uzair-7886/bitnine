function Palindrome(str){
    
    //using two pointers technique by initializing one from the start of string and second to the end of string

    //we can also use the method of reversing a string first and then comparing it with the original. But the approach I used is more efficient, if we use two pointers we traverse only half of the string O(n/2)=>O(n). On the other hand if we use reversed string first we would have to traverse the string twice, once for reversing it and once for comparing O(2n)=>O(n) but here we require more memory. In our case the string is reversed only when it is confirm that the string is not palindrome
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