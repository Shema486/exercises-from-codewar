function calculator(a,b,sign){
  // Your code here...
if(typeof a === 'number' && typeof b === 'number' ){
  switch(sign){
      case '+':
      return a+b
       case '/':
      return a/b
       case '*':
      return a*b
       case '-':
      return a-b
  }
  
}
  return 'unknown value'
    
}
const mine =calculator(1,0,'+')
console.log(mine)