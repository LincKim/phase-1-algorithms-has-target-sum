function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const otherNum = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === otherNum) return true
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Find a way to take the numbers inside the array beginning
  from the 1st index to the last adding two of the numbers 
  of the array and then checking whether they equal the target.
  If it does then the return value is 'true'
  Otherwise 'false' is the value.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([15, 45, 78, 9], 4));
}

module.exports = hasTargetSum;
