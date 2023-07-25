function MissingNumber(arr){


    let n = arr.length;
    // Finding actual sum of all elements in an Array using reduce() method
    let actualTotal=arr.reduce((acc, curr) => acc + curr);

    // Finding expected sum of all elements in an Array using sum of natural numbers formula n*(n+1)/2. Since we have one number missing so we improvise the formula and add 1 to the length of array so it becomes n+1 and n+2 accordingly
    let expectedTotal = (n+1)*(n+2)/2;
    // Finding the missing number
    let missing= expectedTotal-actualTotal

    missing>Math.max(...arr)?missing=0:missing=missing //es6 syntax for Math.max

    return missing;
}

function findMissingNumber() {
    let input = document.getElementById("missingNumberInput").value;
    const output = document.getElementById("missingNumberOutput");

    input=input.replace(/[\[\]]/g, "")
     const arr = input.split(",").map(Number);

    console.log(arr);

    const result = MissingNumber(arr); //calling the above function here

    output.classList.remove("success", "error");
    output.innerHTML = result === 0 ? "No missing number" : `Missing number: ${result}`;
    if (result === 0) {
      output.classList.add("success");
    } else {
      output.classList.add("error");
    }
  }