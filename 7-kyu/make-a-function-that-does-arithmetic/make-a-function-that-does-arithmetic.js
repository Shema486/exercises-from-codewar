function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}
​
// function arithmetic(a, b, operator){
//   return(operator === "additional" ? a+b : operator === "subtract" ? a-b :operator ==="division" ? a/b : operator === "multiplication" : a*b )
// }
​