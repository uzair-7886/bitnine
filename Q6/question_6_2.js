function MissingNumber(arr){
    let n = arr.length;
    // Finding actual sum of all elements in an Array using reduce() method
    let actualTotal=arr.reduce((acc, curr) => acc + curr);
    
    // Finding expected sum of all elements in an Array using sum of natural numbers formula n*(n+1)/2. Since we have one number missing so we improvise the formula and add 1 to the length of array so it becomes n+1 and n+2 accordingly
    let expectedTotal = (n+1)*(n+2)/2;
    // Finding the missing number
    let missing= expectedTotal-actualTotal

    missing==0?console.log("No Missing Number"):console.log(`Number ${missing} is missing from the array`)

    return missing;
}