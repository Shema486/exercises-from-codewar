function squareDigits(num){
  const numbers=num.toString().split('').map(a=>Number(a)**2).join('')
  return Number(numbers)
}