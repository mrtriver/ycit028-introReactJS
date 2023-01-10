

const num = [3,2,4,5,6,7,8,44,1,4,6,11];
let numSort = num.sort((a,b) => a-b);
console.log(numSort);

let maxSum = numSort[numSort.length-1] + numSort[numSort.length-2];
let minSum = numSort[0] + numSort[1];

console.log(maxSum);
console.log(minSum);

