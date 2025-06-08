// How to count the positive numbers in the array
//select the All numbes in the array
//pick the positive numbers only from the array
// by using method  of .filter()
//How to find  sum of negative numbers in the array
//select the All numbers in the array
//condition to get negative numbers
//use method .reduce() to get single value
// 0 is neither positive nor negative.
//What if the input is an empty array or is null, return an empty array.
​
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
​
  let count = 0;
  let sumNegatives = 0;
​
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
  }
​
  return [count, sumNegatives];
}
​
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// Output: [10, -65]