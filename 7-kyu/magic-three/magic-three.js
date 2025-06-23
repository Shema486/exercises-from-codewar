function isMagicThree(array) {
  // Code Here!
  for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < array.length; k++) {
      // Try arr[i], arr[j], arr[k]
      if (array[i] + array[j] + array[k] === 0) {
  return true;
}
​
    }
  }
}
​
 return false;
​
}