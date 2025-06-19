function calcType(a, b, res) {
  // your code here
  return (res===a+b?"addition":res===a-b?'subtraction':res===a*b?'multiplication':res===a/b && b>0?"division":'no divisible by 0')
}