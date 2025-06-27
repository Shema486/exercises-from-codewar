function divisibleBy(numbers, divisor){
  const number = numbers.filter(a=>a%divisor ===0)
  return number
}