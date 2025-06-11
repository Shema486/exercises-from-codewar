//split into an array
//map to act on every element
//reverse method to reverse
//join to join them
function reverseWords(str) {
  // Go for it
  
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
​